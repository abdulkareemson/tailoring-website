import { Collection } from "tinacms";

const FashionStyle: Collection = {
  label: "Fashion Styles",
  name: "fashionStyle",
  path: "content/styles",
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
      isTitle: true,
      required: true,
    },
    {
      type: "image",
      label: "Image",
      name: "image",
    },
    {
      type: "number",
      label: "Price",
      name: "price",
    },
    {
      type: "string",
      label: "Category",
      name: "category",
      list: true,
      options: ["Men", "Women", "Family", "Kids", "Kaftans", "Agbada"],
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

export default FashionStyle;
