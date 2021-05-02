import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { mapEdgesToNodes } from "../lib/helpers";

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
    <div>
      <Title>Coffee Bar</Title>
      <Section title='Brewed Coffee' list={brewedNodes} />
      <Section title='Espresso Drink' list={espressoNodes} />
      <Section title='Other Beverages' list={otherNodes} />
      <Section title='Pastries' list={pastryNodes} />
    </div>
  )
}

const Title = styled.h1`
  font-family: 'Original Surfer', sans-serif;
  font-size: 1.9rem;
`



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