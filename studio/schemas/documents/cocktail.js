export default {
  title: "Cocktail",
  name: "cocktail",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price'
    },
    {
      name: "ingredients",
      type: "array",
      title: "Ingredients",
      of: [
        {
          type: 'string'
        }
      ]
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
    // {
    //   name: 'garnish',
    //   type: 'string',
    //   title: 'Garnish'
    // },
    // {
    //   name: 'glassware',
    //   type: 'string',
    //   title: 'Glassware',
    //   options: {
    //     list: [
    //       {title: 'Rocks', value: 'rocks'},
    //       {title: 'Coupe', value: 'coupe'},
    //       {title: 'Martini', value: 'martini'},
    //       {title: 'Collins', value: 'collins'},
    //       {title: 'Coffee Mug', value: 'coffee mug'},
    //       {title: 'Clear Mug', value: 'clear mug'},
    //       {title: 'Wine', value: 'wine'},
    //       {title: 'Flute', value: 'flute'}
    //     ]
    //   }
    // },
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
    //   name: "body",
    //   type: "bodyPortableText",
    //   description: "Be sure to type as a numbered list. So click this ↓ first",
    //   title: "Build Steps",
    // },
    // {
    //   name: "mainImage",
    //   type: "mainImage",
    //   title: "Main image",
    // },
  ],
};
