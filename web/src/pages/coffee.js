import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes } from "../lib/helpers";

import Layout from '../components/layout'
import LetterheadWrapper from '../components/letterheadWrapper'
import CoffeeWrapper from '../components/coffeeSection'
import CoffeeList from '../components/coffeeList';

const CoffeePage = ({data}) => {
  
  const brewedNodes = !!data?.brewed
    ? mapEdgesToNodes(data.brewed)
    : [];
  const espressoNodes = !!data?.espresso
    ? mapEdgesToNodes(data.espresso)
    : [];
  const otherNodes = !!data?.other
    ? mapEdgesToNodes(data.other)
    : [];
  const pastryNodes = !!data?.pastry
    ? mapEdgesToNodes(data.pastry)
    : [];

    console.log(data);
  return (
    <Layout>
      <LetterheadWrapper id='coffee' padding={16}>
        <CoffeeList brewed={brewedNodes} espresso={espressoNodes} other={otherNodes} pastry={pastryNodes} />
        <CoffeeList brewed={brewedNodes} espresso={espressoNodes} other={otherNodes} pastry={pastryNodes} />
      </LetterheadWrapper>
    </Layout>
  )
}

export const query = graphql`
  query {
    brewed: allSanityCoffee(filter: {type: {eq: "brewed"}}) {
      edges {
        node {
          id
          name
          price
          type
        }
      }
    }
    espresso: allSanityCoffee(filter: {type: {eq: "espresso"}}) {
      edges {
        node {
          id
          name
          price
          type
        }
      }
    }
    other: allSanityCoffee(filter: {type: {eq: "other"}}) {
      edges {
        node {
          id
          name
          price
          type
        }
      }
    }
    pastry: allSanityCoffee(filter: {type: {eq: "pastry"}}) {
      edges {
        node {
          id
          name
          price
          type
        }
      }
    }
  }
`

export default CoffeePage