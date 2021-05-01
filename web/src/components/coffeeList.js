import React from 'react'

import CoffeeWrapper from './coffeeWrapper'
import Header from '../components/sectionHeader'
import Section from '../components/coffeeSection'


const CoffeeList = ({brewed, espresso, other, pastry}) => (
  <CoffeeWrapper>
    <Header>Coffee Bar</Header>
    <Section title='Brewed Coffee' list={brewed} />
    <Section title='Espresso Drink' list={espresso} />
    <Section title='Other Beverages' list={other} />
    <Section title='Pastries' list={pastry} />
  </CoffeeWrapper>
)

export default CoffeeList