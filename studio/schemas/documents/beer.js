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
      title: "Draft",
      name: "draft",
      type: "boolean"
    },
    {
      name: "price",
      type: "string",
      title: "Price",
      validation: Rule => Rule.regex(/\./).error('Be sure to add the full price. eg: 3.00')
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],
};
