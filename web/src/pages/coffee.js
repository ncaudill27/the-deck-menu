import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes } from "../lib/helpers";

import Layout from '../components/layout'
import LetterheadWrapper from '../components/letterheadWrapper'
import Header from '../components/sectionHeader'
import Section from '../components/coffeeSection'

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

  return (
    <Layout>
      <LetterheadWrapper id='coffee' padding={16}>
        <Header>Coffee Bar</Header>
        <Section title='Brewed Coffee' list={brewedNodes} />
        <Section title='Espresso Drink' list={espressoNodes} />
        <Section title='Other Beverages' list={otherNodes} />
        <Section title='Pastries' list={pastryNodes} />
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