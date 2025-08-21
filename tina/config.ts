// path: tina/config.ts
import { defineConfig } from "tinacms";
import FashionStyle from "./collections/fashionStyle"; // Import the collection from its file
import Services from "./collections/services"; // Import the collection from its file

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
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
    collections: [
      FashionStyle, // Reference the imported collection
      Services, // Reference the imported collection
    ],
  },
});
