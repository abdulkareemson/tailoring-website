import { defineConfig } from "tinacms";
import FashionStyle from "./collections/fashionStyle";
import Services from "./collections/services";

export default defineConfig({
  branch: process.env.TINA_BRANCH || "main", // branch (safe to be private)
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID!, // ✅ must be NEXT_PUBLIC
  token: process.env.TINA_TOKEN!, // ✅ keep private
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
