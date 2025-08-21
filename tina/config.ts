// path: tina/config.ts
import { defineConfig } from "tinacms";
import FashionStyle from "./collections/fashionStyle";
import Services from "./collections/services";

// Determine the branch for Tina Cloud
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  // Use environment variables instead of hardcoded values
  clientId: process.env.TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    publicFolder: "public",
    outputFolder: "admin",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [FashionStyle, Services],
  },
});
