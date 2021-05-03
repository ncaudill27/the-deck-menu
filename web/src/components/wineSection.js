import React from 'react'

import Wrapper from '../components/sectionWrapper'
import Header from '../components/sectionHeader'
import Subheader from '../components/subheader'
import WineList from '../components/wineList'

const WineSection = ({red, white, sparkling}) => (
  <Wrapper>
    <Header>Wine Selection</Header>
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
  </Wrapper>
)

export default WineSection