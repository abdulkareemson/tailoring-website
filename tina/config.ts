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

// Load environment variables, fallback to NEXT_PUBLIC_ for local dev
const clientId =
  process.env.TINA_CLIENT_ID || process.env.NEXT_PUBLIC_TINA_CLIENT_ID;
const token = process.env.TINA_TOKEN;

// Graceful check for missing env vars
if (!clientId || !token) {
  throw new Error(
    "❌ Missing TinaCMS environment variables. Please set TINA_CLIENT_ID (or NEXT_PUBLIC_TINA_CLIENT_ID) and TINA_TOKEN."
  );
}

export default defineConfig({
  branch,
  clientId,
  token,
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
