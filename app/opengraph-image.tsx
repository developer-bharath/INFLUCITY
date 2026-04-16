import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background:
            "radial-gradient(circle at 20% 24%, rgba(255,255,255,0.16), transparent 42%), radial-gradient(circle at 82% 20%, rgba(255,255,255,0.12), transparent 44%), #0a0a0a",
          color: "white",
          fontFamily: "Inter, system-ui, sans-serif",
          overflow: "hidden",
        }}
      >
        <svg
          width="1200"
          height="630"
          viewBox="0 0 1200 630"
          style={{ position: "absolute", inset: 0, opacity: 0.45 }}
        >
          <path d="M88 526C252 424 402 396 566 414C728 430 864 396 1078 266" stroke="rgba(186,230,253,0.5)" strokeWidth="2" fill="none" />
          <path d="M96 438C268 354 434 330 620 350C792 368 930 342 1112 250" stroke="rgba(186,230,253,0.45)" strokeWidth="1.8" fill="none" />
          <path d="M142 584C322 488 504 474 694 492C868 510 996 470 1160 398" stroke="rgba(186,230,253,0.42)" strokeWidth="1.8" fill="none" />
          <circle cx="610" cy="356" r="8" fill="white" />
          <circle cx="736" cy="242" r="6" fill="white" />
          <circle cx="836" cy="308" r="6" fill="white" />
          <circle cx="498" cy="220" r="6" fill="white" />
          <circle cx="862" cy="412" r="6" fill="white" />
          <circle cx="434" cy="422" r="6" fill="white" />
        </svg>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "88px 74px",
            maxWidth: 760,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              fontSize: 24,
              letterSpacing: 2.4,
              textTransform: "uppercase",
              color: "rgba(229,231,235,0.9)",
              marginBottom: 24,
              fontWeight: 600,
            }}
          >
            Built for local city businesss to get real customers
          </div>
          <div
            style={{
              fontSize: 74,
              lineHeight: 1.02,
              fontWeight: 900,
              letterSpacing: -1.8,
              marginBottom: 22,
            }}
          >
            Get real local customers.
          </div>
          <div
            style={{
              fontSize: 44,
              lineHeight: 1.05,
              fontWeight: 800,
              color: "rgba(212,212,216,0.95)",
              marginBottom: 24,
            }}
          >
            Not just online views.
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.35,
              color: "rgba(212,212,216,0.92)",
              maxWidth: 780,
            }}
          >
            INFLUCITY helps local businesses launch city-targeted influencer campaigns with measurable reach and
            real customer outcomes.
          </div>
        </div>
      </div>
    ),
    size
  );
}
