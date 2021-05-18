import React from 'react'
import styled from 'styled-components'

import Logo from "../images/svg/main_logo.svg";
import CoffeeWrapper from './coffeeWrapper'
import Section from '../components/coffeeSection'
import LogoArray from '../components/logoArray'

const CoffeeList = ({brewed, espresso, other, pastry}) => (
  <CoffeeWrapper>
    <HeaderWrapper>
      <Logo style={{width: '100%', height: '100%'}} />
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
  width: 150px;
  height: 150px;
`

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* height: calc(7in + 32px); */
  height: calc(7in);
`

export default CoffeeList