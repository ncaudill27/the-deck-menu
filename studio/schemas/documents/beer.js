export default {
  title: "Beer",
  name: "beer",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      title: "Brewery",
      name: "brewery",
      type: "string"
    },
    {
      name: "price",
      type: "number",
      title: "Price",
    },
    {
      name: "mainImage",
      type: "mainImage",
      title: "Main image",
    },
    {
      name: "categories",
      type: "array",
      title: "Categories",
      of: [
        {
          type: "reference",
          to: {
            type: "category",
          },
        },
      ],
    },
  ],
};
