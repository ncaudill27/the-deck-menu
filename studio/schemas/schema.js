// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// document schemas
// import category from "./documents/category";
import coffee from "./documents/coffee";
import food from './documents/food';
import wine from './documents/wine';
import beer from './documents/beer';
import cocktail from './documents/cocktail';

// Object types
import bodyPortableText from "./objects/bodyPortableText";
import bioPortableText from "./objects/bioPortableText";
import excerptPortableText from "./objects/excerptPortableText";
import mainImage from "./objects/mainImage";
import ingredientCocktail from './objects/ingredientCocktail';
import options from './objects/options'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "menu",
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    coffee,
    food,
    wine,
    beer,
    cocktail,
    // category,
    mainImage,
    options,
    ingredientCocktail,
    bodyPortableText,
    bioPortableText,
    excerptPortableText,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ]),
});
