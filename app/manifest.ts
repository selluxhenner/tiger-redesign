import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Restaurant Tiger Wil",
    short_name: "Tiger Wil",
    description:
      "Restaurant, Bar und Treffpunkt in Wil SG. Tagsüber Schweizer Küche, abends Thai frisch aus dem Wok.",
    start_url: "/",
    display: "browser",
    background_color: "#241108",
    theme_color: "#241108",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
