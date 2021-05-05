import React, { useRef } from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes } from '../lib/helpers'
import { useReactToPrint } from 'react-to-print'

import Layout from '../components/layout'
import LetterheadWrapper from '../components/letterheadWrapper'
import DraftSection from '../components/draftSection'
import BeerSection from '../components/beerSection'
import WineSection from '../components/wineSection'
import CocktailSection from '../components/cocktailSection'
import PrintButton from '../components/printButton'

const DrinksPage = ({data}) => {
  const menuEl = useRef()

  const handlePrint = useReactToPrint({
    content: () => menuEl.current,
  });

  const draftNodes = !!data?.draft
    ? mapEdgesToNodes(data.draft)
    : [];
  const beerNodes = !!data?.beer
    ? mapEdgesToNodes(data.beer)
    : [];
  const redNodes = !!data?.red
    ? mapEdgesToNodes(data.red)
    : [];
  const whiteNodes = !!data?.white
    ? mapEdgesToNodes(data.white)
    : [];
  const sparklingNodes = !!data?.sparkling
    ? mapEdgesToNodes(data.sparkling)
    : [];
  const cocktailsNodes = !!data?.cocktail
    ? mapEdgesToNodes(data.cocktail)
    : [];

  return (
    <Layout>
      <div style={{position: 'relative'}}>
        <PrintButton handlePrint={handlePrint} />
        <LetterheadWrapper ref={menuEl}>
          <DraftSection list={draftNodes} />
          <BeerSection list={beerNodes} />
          <WineSection red={redNodes} white={whiteNodes} sparkling={sparklingNodes} />
          <CocktailSection list={cocktailsNodes} />
        </LetterheadWrapper>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    draft: allSanityBeer(filter: {draft: {eq: true}}) {
      edges {
        node {
          name
          brewery
          id
        }
      }
    }
    beer: allSanityBeer(filter: {draft: {eq: false}}) {
      edges {
        node {
          name
          price
          brewery
          id
        }
      }
    }
    red: allSanityWine(filter: {type: {eq: "red"}}) {
      edges {
        node {
          price_glass
          price_bottle
          type
          name
          id
        }
      }
    }
    white: allSanityWine(filter: {type: {eq: "wine"}}) {
      edges {
        node {
          price_glass
          price_bottle
          type
          name
          id
        }
      }
    }
    sparkling: allSanityWine(filter: {type: {eq: "sparkling"}}) {
      edges {
        node {
          price_glass
          price_bottle
          type
          name
          id
        }
      }
    }
    cocktail: allSanityCocktail {
      edges {
        node {
          name
          price
          ingredients
          id
        }
      }
    }
  }
`

export default DrinksPage