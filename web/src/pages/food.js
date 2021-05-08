import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes } from "../lib/helpers"
import { useReactToPrint } from 'react-to-print'

import Layout from '../components/layout'
import FoodMenu from '../components/foodMenu'

const FoodPage = ({data}) => {
  const foodNodes = !!data?.food
    ? mapEdgesToNodes(data.food)
    : [];
  const kidsNodes = !!data?.kids
    ? mapEdgesToNodes(data.kids)
    : [];
  const dessertNodes = !!data?.dessert
    ? mapEdgesToNodes(data.dessert)
    : [];

  return (
    <Layout>
      <FoodMenu list={foodNodes} />
    </Layout>
  )
}

export const query = graphql`
  query {
    food: allSanityFood(filter: {is_dessert: {ne: true}, is_kid_menu: {ne: true}}) {
      edges {
        node {
          name
          price
          _rawDescription(resolveReferences: {maxDepth: 10})
          additional_options {
            price
            context
          }
        }
      }
    }
    kids: allSanityFood(filter: {is_kid_menu: {eq: true}}) {
      edges {
        node {
          name
          price
          _rawDescription(resolveReferences: {maxDepth: 10})
          additional_options {
            price
            context
          }
        }
      }
    }
    dessert: allSanityFood(filter: {is_dessert: {eq: true}}) {
      edges {
        node {
          name
          price
          _rawDescription(resolveReferences: {maxDepth: 10})
          additional_options {
            price
            context
          }
        }
      }
    }
  }
`

export default FoodPage