import React from 'react'
import styled from 'styled-components'

import CoffeeWrapper from './coffeeWrapper'
import Header from '../components/sectionHeader'
import Section from '../components/coffeeSection'


const CoffeeList = ({brewed, espresso, other, pastry}) => (
  <CoffeeWrapper>
    <HeaderWrapper>
      <Header>Coffee Bar</Header>
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
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ColumnWrapper = styled.div`
  margin-top: -32px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 670px;
`

export default CoffeeList