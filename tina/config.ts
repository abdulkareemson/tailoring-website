import { defineConfig } from "tinacms";
import FashionStyle from "./collections/fashionStyle";
import Services from "./collections/services";

export default defineConfig({
  // No branch, clientId, or token needed for local dev
  build: {
    publicFolder: "public",
    outputFolder: "admin",
  },
  media: {
    // Filesystem media store
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [FashionStyle, Services],
  },
});
