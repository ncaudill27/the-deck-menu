import React from 'react'
import styled from 'styled-components'

import WineList from '../components/wineList'

const WineSection = ({red, white, sparkling}) => (
  <Wrapper>
    <Header>
      Red
    </Header>
    <WineList list={red} />
    <Header>
      White
    </Header>
    <WineList list={white} />
    <Header>
      Sparkling
    </Header>
    <WineList list={sparkling} />
  </Wrapper>
)

const Wrapper = styled.div`
  font-family: 'Work Sans', sans-serif;
`

const Header = styled.h3`
  font-family: 'Original Surfer', sans-serif;
  font-size: 1.5rem;
  margin: 0;
  margin-bottom: 8px;

  &:not(:first-of-type) {
    margin-top: 8px;
  }
`

export default WineSection