import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vincent Otieno Portfolio",
    short_name: "Vincent Portfolio",
    description:
      "Frontend Developer, Software Engineer and Fullstack Developer portfolio by Vincent Otieno.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  }
}
