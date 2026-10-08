import type { NextConfig } from "next";

// STATIC_EXPORT=1 npm run build → statische Kopie in out/ für tiger-wil.serviweb.ch (nginx liefert sie direkt aus).
// Ohne Server gibt es keine Bildoptimierung, darum werden die Originalbilder ausgeliefert.
const staticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(staticExport && { output: "export", images: { unoptimized: true } }),
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
