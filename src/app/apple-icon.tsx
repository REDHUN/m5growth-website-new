import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 92,
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "40px",
          fontWeight: 900,
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          letterSpacing: "-2px",
          border: "4px solid rgba(136, 204, 0, 0.5)",
        }}
      >
        <span style={{ color: "#ffffff" }}>M</span>
        <span style={{ color: "#88cc00" }}>5</span>
      </div>
    ),
    {
      ...size,
    }
  );
}
