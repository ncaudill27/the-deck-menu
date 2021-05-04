import React from 'react'
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"

import CoffeeWrapper from './coffeeWrapper'
import Header from '../components/sectionHeader'
import Section from '../components/coffeeSection'


const CoffeeList = ({brewed, espresso, other, pastry}) => (
  <CoffeeWrapper>
    <HeaderWrapper>
      <StaticImage
        src="../images/main_logo.png"
        width={150}
        height={150}
        quality={100}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="The Fitzroy logo title"
      />
    </HeaderWrapper>
    <ColumnWrapper>
      <Section title='Brewed Coffee' list={brewed} />
      <Section title='Espresso Drink' list={espresso} />
      <Section title='Other Beverages' list={other} />
      <Section title='Pastries' list={pastry} />
    </ColumnWrapper>
  </CoffeeWrapper>
)

const HeaderWrapper = styled.div`
  position: absolute;
  top: -75px;
  left: 50%;
  transform: translateX(-75px);
  width: 100%;
`

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 600px;
`

export default CoffeeList