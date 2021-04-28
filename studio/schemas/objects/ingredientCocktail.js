export default {
  title: 'Cocktail Ingredient',
  name: 'ingredient_cocktail',
  type: 'object',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'amount',
      type: 'string',
      title: 'Amount',
      validation: Rule => Rule.regex(/\./, {invert: true}).error('Use fractions instead of decimals.')
    },
    {
      name: 'measurement',
      type: 'string',
      title: 'Measurement',
      options: {
        list: [
          {title: 'Ounces', value: 'ounces'},
          {title: 'Dashes', value: 'dashes'},
          {title: 'Slices', value: 'slices'},
          {title: 'Leaves', value: 'leaves'}
        ]
      }
    }
  ]
}