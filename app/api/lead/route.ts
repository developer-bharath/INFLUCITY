import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  email?: string;
  phone?: string;
  business?: string;
  city?: string;
  goals?: string;
  message?: string;
  source?: string;
};

export async function POST(request: Request) {
  try {
    const apiKey = process.env.AIRTABLE_API_KEY;
    const baseId = process.env.AIRTABLE_BASE_ID;
    const tableName = process.env.AIRTABLE_TABLE_NAME ?? "Leads";

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

    const fields = {
      Name: body.name.trim(),
      Email: body.email?.trim() || undefined,
      Phone: body.phone?.trim() || undefined,
      Business: body.business?.trim() || undefined,
      City: body.city?.trim() || undefined,
      Goals: body.goals?.trim() || undefined,
      Message: body.message?.trim() || undefined,
      Source: body.source?.trim() || "Website",
      CreatedAt: new Date().toISOString(),
    };

    const airtableRes = await fetch(
      `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          records: [{ fields }],
          typecast: true,
        }),
      }
    );

    if (!airtableRes.ok) {
      const errText = await airtableRes.text();
      return NextResponse.json(
        {
          ok: false,
          error: "Failed to create Airtable lead record.",
          details: errText,
        },
        { status: 502 }
      );
    }

    const data = (await airtableRes.json()) as {
      records?: Array<{ id: string }>;
    };

    return NextResponse.json({
      ok: true,
      id: data.records?.[0]?.id,
    });
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
