// path: tina/config.ts
import { defineConfig } from "tinacms";
import FashionStyle from "./collections/fashionStyle"; // Import the collection
import Services from "./collections/services"; // Import the collection

// Determine the branch for Tina Cloud
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: "3e281db9-477e-4b8e-93f2-b0d2edde0b74", // Your Tina Cloud Client ID
  token: "", // Optional: leave blank for read-only access
  build: {
    publicFolder: "public", // Public folder for images/media
    outputFolder: "admin", // Tina Cloud admin UI output
  },
  media: {
    tina: {
      mediaRoot: "", // Media root inside Tina Cloud
      publicFolder: "public", // Folder to store uploaded media
    },
  },
  schema: {
    collections: [
      FashionStyle, // Reference FashionStyle collection
      Services, // Reference Services collection
    ],
  },
});
