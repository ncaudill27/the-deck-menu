export default {
  name: "coffee",
  type: "document",
  title: "Coffee",
  description: "Coffee drinks and pastries",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "price",
      type: "string",
      title: "Price",
      validation: Rule => Rule.regex(/\./).error('Be sure to add the full price. eg: 3.00')
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
    {
      name: "mainImage",
      type: "mainImage",
      title: "Main image",
    },
  ],
};
