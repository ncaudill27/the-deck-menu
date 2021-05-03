import React from 'react'
import styled from 'styled-components'

import Wrapper from '../components/sectionWrapper'
import Subheader from '../components/subheader'
import WineList from '../components/wineList'

const WineSection = ({red, white, sparkling}) => (
  <Wrapper>
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