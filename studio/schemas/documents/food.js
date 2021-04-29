export default {
  name: "food",
  type: "document",
  title: "Food",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "price",
      type: "number",
      title: "Price",
    },
    {
      title: 'Ingredients',
      name: 'ingredients',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: "mainImage",
      type: "mainImage",
      title: "Main image",
    },
    // {
    //   name: "categories",
    //   type: "array",
    //   title: "Categories",
    //   of: [
    //     {
    //       type: "reference",
    //       to: {
    //         type: "category",
    //       },
    //     },
    //   ],
    // },
  ],
};
