import { defineConfig } from "tinacms";
import FashionStyle from "./collections/fashionStyle";
import Services from "./collections/services";

export default defineConfig({
  branch: process.env.TINA_BRANCH || "main", // ✅ use env var or fallback
  clientId: process.env.TINA_CLIENT_ID!, // ✅ required for Tina Cloud
  token: process.env.TINA_TOKEN!, // ✅ required for Tina Cloud
  build: {
    publicFolder: "public",
    outputFolder: "admin",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [FashionStyle, Services],
  },
});
