import { ImageResponse } from "next/og";

export const alt = "M5 Digital Growth | Digital Marketing Agency in Kerala";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0a",
          padding: "60px 80px",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow effects */}
        <div
          style={{
            position: "absolute",
            top: "-150px",
            right: "-150px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            backgroundColor: "rgba(136, 204, 0, 0.12)",
            filter: "blur(120px)",
          }}
        />

        {/* Top Header Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              backgroundColor: "#88cc00",
              color: "#000000",
              fontWeight: 900,
              fontSize: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            M5
          </div>
          <span
            style={{
              color: "#ffffff",
              fontSize: "28px",
              fontWeight: 900,
              letterSpacing: "-0.5px",
            }}
          >
            M5 DIGITAL GROWTH
          </span>
        </div>

        {/* Main Heading & Subtitle */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "950px",
          }}
        >
          <h1
            style={{
              fontSize: "56px",
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.15,
              letterSpacing: "-1.5px",
              margin: 0,
            }}
          >
            Digital Marketing & <br />
            <span style={{ color: "#88cc00" }}>Performance Growth Agency</span>
          </h1>
          <p
            style={{
              fontSize: "24px",
              color: "#a3a3a3",
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            Performance Marketing • SEO • Social Media • Web & App Development • Kerala, India
          </p>
        </div>

        {/* Bottom Tagline & Domain */}
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #262626",
            paddingTop: "28px",
          }}
        >
          <span
            style={{
              color: "#88cc00",
              fontSize: "16px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            STRATEGY TODAY • BIGGER TOMORROW
          </span>
          <span
            style={{
              color: "#737373",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            https://m5growth.in
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
