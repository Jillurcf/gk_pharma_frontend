import { ImageResponse } from "next/og";

export const alt =
  "GK Pharma (Unani) Limited — Unani medicine manufacturer in Tongi, Gazipur, Bangladesh";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#F7FAF8",
          padding: "64px 72px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            borderRadius: 9999,
            border: "2px solid rgba(0,131,72,0.14)",
            right: -120,
            top: -160,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 360,
            height: 360,
            borderRadius: 9999,
            backgroundColor: "rgba(0,131,72,0.07)",
            right: 90,
            bottom: -180,
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 76,
              height: 76,
              borderRadius: 20,
              backgroundColor: "#008348",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            GK
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 32, fontWeight: 700, color: "#171B68" }}>
              GK Pharma
            </div>
            <div
              style={{
                fontSize: 14,
                letterSpacing: 6,
                color: "#56665D",
                marginTop: 5,
              }}
            >
              UNANI LIMITED
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: 3,
              color: "#008348",
            }}
          >
            <div style={{ width: 34, height: 2, backgroundColor: "#008348", display: "flex" }} />
            UNANI MEDICINE · BANGLADESH
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 66,
              fontWeight: 700,
              lineHeight: 1.08,
              color: "#171B68",
              marginTop: 22,
              letterSpacing: -2,
            }}
          >
            <div style={{ display: "flex" }}>Rooted in tradition.</div>
            <div style={{ display: "flex" }}>Presented with care.</div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #E1EAE4",
            paddingTop: 24,
            fontSize: 20,
            color: "#56665D",
          }}
        >
          <div style={{ display: "flex" }}>
            Station Road, Tongi, Gazipur, Bangladesh
          </div>
          <div style={{ display: "flex", color: "#008348", fontWeight: 700 }}>
            Demonstration product catalogue
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
