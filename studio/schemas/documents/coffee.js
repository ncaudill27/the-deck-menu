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
      name: 'type',
      type: 'string',
      title: 'Type',
      description: 'Determines what section on the menu the item will print.',
      options: {
        list: [
          {title: 'Brewed', value: 'brewed'},
          {title: 'Espresso', value: 'espresso'},
          {title: 'Other', value: 'other'},
          {title: 'Pastry', value: 'pastry'}
        ],
        layout: 'radio'
      }
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
    // {
    //   name: "mainImage",
    //   type: "mainImage",
    //   title: "Main image",
    // },
  ],
};
