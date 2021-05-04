import React from 'react'
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"

import CoffeeWrapper from './coffeeWrapper'
import Section from '../components/coffeeSection'
import LogoArray from '../components/logoArray'

const CoffeeList = ({brewed, espresso, other, pastry}) => (
  <CoffeeWrapper>
    <HeaderWrapper>
      <StaticImage
        src="../images/main_logo.png"
        width={150}
        height={150}
        quality={100}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="The Deck Logo"
      />
    </HeaderWrapper>
    <ColumnWrapper>
      <Section title='Brewed Coffee' list={brewed} />
      <Section title='Espresso Drink' list={espresso} />
      <Section title='Other Beverages' list={other} />
      <Section title='Pastries' list={pastry} />
      <LogoArray />
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
  justify-content: space-between;
  height: calc(7in + 32px);
`

export default CoffeeList