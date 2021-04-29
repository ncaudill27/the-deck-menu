import S from "@sanity/desk-tool/structure-builder";
import { MdLocalBar, MdLocalCafe, MdLocalDrink, MdOpacity, MdRestaurantMenu } from "react-icons/md";
import IframePreview from "../previews/IframePreview";

// Web preview configuration
const remoteURL = "https://the-deck-menu.netlify.app";
const localURL = "http://localhost:8000";
const previewURL =
  window.location.hostname === "localhost" ? localURL : remoteURL;

export const getDefaultDocumentNode = (props) => {
  /**
   * Here you can define fallback views for document types without
   * a structure definition for the document node. If you want different
   * fallbacks for different types, or document values (e.g. if there is a slug present)
   * you can set up that logic in here too.
   * https://www.sanity.io/docs/structure-builder-reference#getdefaultdocumentnode-97e44ce262c9
   */
  const { schemaType } = props;
  if (schemaType == "post") {
    return S.document().views([
      S.view.form(),
      S.view
        .component(IframePreview)
        .title("Web preview")
        .options({ previewURL }),
    ]);
  }
  return S.document().views([S.view.form()]);
};

/**
 * This defines how documents are grouped and listed out in the Studio.
 * Relevant documentation:
 * - https://www.sanity.io/guides/getting-started-with-structure-builder
 * - https://www.sanity.io/docs/structure-builder-introduction
 * - https://www.sanity.io/docs/structure-builder-typical-use-cases
 * - https://www.sanity.io/docs/structure-builder-reference
 */

export default () =>
  S.list()
    .title("Content")
    .items([
      S.divider(),
      S.listItem()
        .title("Coffee Bar")
        .icon(MdLocalCafe)
        .schemaType("coffee")
        .child(S.documentTypeList("coffee").title("Coffee & Pastries")),
      S.listItem()
        .title("Food Menu")
        .icon(MdRestaurantMenu)
        .schemaType("food")
        .child(S.documentTypeList("food").title("Menu Items")),
      S.listItem()
        .title("Wine")
        .icon(MdOpacity)
        .schemaType("wine")
        .child(S.documentTypeList("wine").title("Wine List")),
      S.listItem()
        .title("Beer")
        .icon(MdLocalDrink)
        .schemaType("beer")
        .child(S.documentTypeList("beer").title("Beer List")),
      S.listItem()
        .title("Cocktails")
        .icon(MdLocalBar)
        .schemaType("cocktail")
        .child(S.documentTypeList("cocktail").title("Cocktail List")),
      // S.listItem()
      //   .title("Categories")
      //   .icon(MdLocalOffer)
      //   .schemaType("category")
      //   .child(S.documentTypeList("category").title("Categories")),
      // `S.documentTypeListItems()` returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above.
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["food", "coffee", "wine", "beer", "cocktail"].includes(
            listItem.getId()
          )
      ),
    ]);
