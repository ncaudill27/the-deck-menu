export default {
  title: "Wine",
  name: "wine",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "price_glass",
      type: "number",
      title: "Price by the glass",
    },
    {
      name: "price_bottle",
      type: "number",
      title: "Price by the bottle"
    },
    {
      name: "type",
      type: "string",
      title: "Type",
      options: {
        list: [
          {title: 'Red', value: 'red'},
          {title: 'White', value: 'wine'},
          {title: 'Sparkling', value: 'sparkling'}
        ],
        layout: 'radio'
      }
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
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
