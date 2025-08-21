// path: tina/collections/services.ts
import { Collection } from "tinacms";

const services: Collection = {
  label: "Services",
  name: "services",
  path: "content/services",
  format: "json",
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      label: "Subtitle",
      name: "subtitle",
    },
    {
      type: "image",
      label: "Image",
      name: "image",
    },
    {
      type: "string",
      label: "Description",
      name: "description",
      ui: {
        component: "textarea",
      },
    },
  ],
};

export default services;
