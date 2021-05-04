import React, { useRef } from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes } from "../lib/helpers";
import styled from 'styled-components'
import { useReactToPrint } from 'react-to-print'

import Layout from '../components/layout'
import CoffeeLetterhead from '../components/coffeeLetterhead'
import CoffeeList from '../components/coffeeList';
import PrintButton from '../components/printButton'

const CoffeePage = ({data}) => {
  const menuEl = useRef()
  
  const handlePrint = useReactToPrint({
    content: () => menuEl.current,
  });

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
      <div style={{position: 'relative'}}>
        <PrintButton handlePrint={handlePrint} />
        <CoffeeLetterhead id='coffee' padding={16} ref={menuEl}>
          <CoffeeList brewed={brewedNodes} espresso={espressoNodes} other={otherNodes} pastry={pastryNodes} />
          <CutLine />
          <CoffeeList brewed={brewedNodes} espresso={espressoNodes} other={otherNodes} pastry={pastryNodes} />
        </CoffeeLetterhead>
      </div>
    </Layout>
  )
}

const CutLine = styled.div`
  position: absolute;
  left: 4.25in;
  width: 0;
  height: 100%;
  border: 0.5px dashed white;
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