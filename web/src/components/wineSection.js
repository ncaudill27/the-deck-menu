import React from 'react'

import Subheader from '../components/subheader'
import WineList from '../components/wineList'
import DrinkHeader from './drinkHeader'
import DrinkSection from './drinkSection'

const WineSection = ({red, white, sparkling}) => (
  <DrinkSection>
    <DrinkHeader>Wine Selection</DrinkHeader>
    <Subheader>
      Red
    </Subheader>
    <WineList list={red} />
    <Subheader>
      White
    </Subheader>
    <WineList list={white} />
    <Subheader>
      Sparkling
    </Subheader>
    <WineList list={sparkling} />
  </DrinkSection>
)

export default WineSection