import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #2dd4bf 0%, #0d9488 50%, #0f766e 100%)",
          borderRadius: 7,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
          }}
        >
          <div
            style={{
              width: 18,
              height: 7,
              background: "#f1f5f9",
              borderRadius: 2,
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <div style={{ display: "flex", gap: 2 }}>
              <div
                style={{
                  width: 5,
                  height: 4,
                  background: "rgba(255,255,255,0.95)",
                  borderRadius: 1,
                }}
              />
              <div
                style={{
                  width: 5,
                  height: 4,
                  background: "rgba(255,255,255,0.95)",
                  borderRadius: 1,
                }}
              />
              <div
                style={{
                  width: 5,
                  height: 4,
                  background: "rgba(255,255,255,0.95)",
                  borderRadius: 1,
                }}
              />
            </div>
            <div style={{ display: "flex", gap: 2 }}>
              <div
                style={{
                  width: 5,
                  height: 4,
                  background: "rgba(255,255,255,0.95)",
                  borderRadius: 1,
                }}
              />
              <div
                style={{
                  width: 5,
                  height: 4,
                  background: "rgba(255,255,255,0.95)",
                  borderRadius: 1,
                }}
              />
              <div
                style={{
                  width: 5,
                  height: 4,
                  background: "rgba(255,255,255,0.95)",
                  borderRadius: 1,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
