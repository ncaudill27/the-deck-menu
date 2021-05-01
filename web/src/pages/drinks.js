import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { mapEdgesToNodes } from '../lib/helpers'

import DraftSection from '../components/draftSection'
import BeerSection from '../components/beerSection'

const DrinksPage = ({data}) => {

  const draftNodes = !!data?.draft
    ? mapEdgesToNodes(data.draft)
    : [];
  const beerNodes = !!data?.beer
    ? mapEdgesToNodes(data.beer)
    : [];
  const wineNodes = !!data?.wine
    ? mapEdgesToNodes(data.wine)
    : [];
  const cocktailsNodes = !!data?.cocktail
    ? mapEdgesToNodes(data.cocktail)
    : [];

  return (
    <div>
      <DraftSection drafts={draftNodes} />
      <BeerSection beers={beerNodes} />
    </div>
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
    wine: allSanityWine {
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