import { NextResponse } from "next/server";
import { CONTACT_EMAIL } from "@/lib/contact";

type LeadPayload = {
  name?: string;
  email?: string;
  phone?: string;
  business?: string;
  city?: string;
  area?: string;
  instagram?: string;
  followers?: string;
  goals?: string;
  message?: string;
  type?: string;
  source?: string;
  termsAccepted?: boolean;
};

type AirtableErrorShape = {
  error?: {
    type?: string;
    message?: string;
  };
};

async function sendLeadNotificationEmail(payload: {
  to: string;
  subject: string;
  text: string;
}) {
  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    console.warn("Lead email notification skipped: RESEND_API_KEY is not set.");
    return;
  }

  const fromEmail = process.env.LEAD_EMAIL_FROM ?? "onboarding@resend.dev";

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [payload.to],
      subject: payload.subject,
      text: payload.text,
    }),
  });

  if (!res.ok) {
    const err = await res.text().catch(() => "");
    throw new Error(`Resend API failed (${res.status}): ${err || "Unknown error"}`);
  }
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.AIRTABLE_API_KEY;
    const baseId = process.env.AIRTABLE_BASE_ID;
    const tableName = process.env.AIRTABLE_TABLE_NAME ?? "Leads";
    const notifyEmailTo = CONTACT_EMAIL;

    if (!apiKey || !baseId) {
      return NextResponse.json(
        { ok: false, error: "Server is missing Airtable configuration." },
        { status: 500 }
      );
    }

    const body = (await request.json()) as LeadPayload;

    if (!body?.name?.trim()) {
      return NextResponse.json(
        { ok: false, error: "Name is required." },
        { status: 400 }
      );
    }

    const fields: Record<string, string> = {
      Name: body.name.trim(),
      Type: body.type?.trim() || body.source?.trim() || "Website",
    };

    if (body.email?.trim()) fields.Email = body.email.trim();
    if (body.phone?.trim()) fields.Phone = body.phone.trim();
    if (body.business?.trim()) fields["Business Name"] = body.business.trim();
    if (body.city?.trim()) fields.City = body.city.trim();
    if (body.area?.trim()) fields["Area/Locality"] = body.area.trim();
    if (body.instagram?.trim()) fields.Instagram = body.instagram.trim();
    if (body.followers?.trim()) fields.Followers = body.followers.trim();
    if (body.goals?.trim()) fields.Goals = body.goals.trim();
    if (body.termsAccepted) fields["Terms Accepted"] = "Yes";
    fields["Created At"] = new Date().toISOString();

    const backupLines = [
      `Type: ${fields.Type ?? ""}`,
      `Name: ${fields.Name ?? ""}`,
      `Email: ${fields.Email ?? ""}`,
      `Phone: ${fields.Phone ?? ""}`,
      `Business Name: ${fields["Business Name"] ?? ""}`,
      `City: ${fields.City ?? ""}`,
      `Area/Locality: ${fields["Area/Locality"] ?? ""}`,
      `Instagram: ${fields.Instagram ?? ""}`,
      `Followers: ${fields.Followers ?? ""}`,
      `Goals: ${fields.Goals ?? ""}`,
      `Message: ${body.message?.trim() ?? ""}`,
      `Terms Accepted: ${body.termsAccepted ? "Yes" : "No"}`,
      `Source: ${body.source?.trim() || "Website"}`,
      `Created At: ${fields["Created At"] ?? ""}`,
    ];

    fields.Message = backupLines.join("\n");

    const endpoint = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`;
    let attempts = 0;
    const maxAttempts = 8;

    while (attempts < maxAttempts) {
      attempts += 1;

      const airtableRes = await fetch(endpoint, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          records: [{ fields }],
          typecast: true,
        }),
      });

      if (airtableRes.ok) {
        const data = (await airtableRes.json()) as {
          records?: Array<{ id: string }>;
        };

        const subject = `New ${fields.Type || "Website"} lead - ${fields.Name || "Unknown"}`;
        const text = backupLines.join("\n");

        try {
          await sendLeadNotificationEmail({
            to: notifyEmailTo,
            subject,
            text,
          });
        } catch (emailError) {
          console.error("Lead email notification failed:", emailError);
        }

        return NextResponse.json({
          ok: true,
          id: data.records?.[0]?.id,
        });
      }

      const errJson = (await airtableRes.json().catch(() => ({}))) as AirtableErrorShape;
      const errType = errJson.error?.type;
      const errMessage = errJson.error?.message ?? "Unknown Airtable error.";

      // Auto-recover if table schema misses optional fields.
      if (errType === "UNKNOWN_FIELD_NAME") {
        const match = errMessage.match(/Unknown field name:\s*["']?(.+?)["']?$/i);
        const fieldName = match?.[1];
        if (fieldName && fields[fieldName]) {
          delete fields[fieldName];
          continue;
        }
      }

      // Recover from invalid column values (e.g. read-only/computed fields).
      if (errType === "INVALID_VALUE_FOR_COLUMN") {
        const quoted = errMessage.match(/["']([^"']+)["']/);
        const fieldName = quoted?.[1];
        if (fieldName && fields[fieldName]) {
          delete fields[fieldName];
          continue;
        }
      }

      const readable =
        errType === "INVALID_PERMISSIONS_OR_MODEL_NOT_FOUND"
          ? "Airtable token/base/table permission issue. Check token scopes and table access."
          : errMessage;

      console.error("Airtable lead insert failed:", { errType, errMessage, status: airtableRes.status });
      try {
        await sendLeadNotificationEmail({
          to: notifyEmailTo,
          subject: `ALERT: Airtable lead save failed - ${fields.Type || "Website"} - ${fields.Name || "Unknown"}`,
          text: [
            "Airtable Save Status: FAILED",
            `Failure Reason: ${readable}`,
            `Airtable HTTP Status: ${airtableRes.status}`,
            "",
            ...backupLines,
          ].join("\n"),
        });
      } catch (emailError) {
        console.error("Airtable failure alert email failed:", emailError);
      }

      return NextResponse.json(
        {
          ok: false,
          error: `Failed to create Airtable lead record: ${readable}`,
        },
        { status: 502 }
      );
    }

    try {
      await sendLeadNotificationEmail({
        to: notifyEmailTo,
        subject: `ALERT: Airtable lead save failed after retries - ${fields.Type || "Website"} - ${fields.Name || "Unknown"}`,
        text: [
          "Airtable Save Status: FAILED",
          "Failure Reason: Failed to create Airtable lead record after schema retries.",
          "",
          ...backupLines,
        ].join("\n"),
      });
    } catch (emailError) {
      console.error("Airtable retry failure alert email failed:", emailError);
    }

    return NextResponse.json(
      {
        ok: false,
        error: "Failed to create Airtable lead record after schema retries.",
      },
      { status: 502 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: "Unexpected server error while creating lead.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
