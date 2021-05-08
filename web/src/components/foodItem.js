import React from 'react'
import styled from 'styled-components'

import Header from './sectionHeader'
import PortableText from './portableText'

const FoodItem = ({name, price, additional_options, _rawDescription}) => (
  <Wrapper>
    <Name>{name}</Name>
    <PortableText blocks={_rawDescription} />
  </Wrapper>

)

const Wrapper = styled.div`
  padding: 8px;
  white-space: noframes;

  &:first-of-type {
    padding-top: 0;
  }

  &:last-of-type {
    padding-bottom: 0;
  }
`

const Name = styled(Header)`
  font-size: 1.2rem;
`

export default FoodItem