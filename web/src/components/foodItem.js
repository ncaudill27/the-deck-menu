import React from 'react'
import styled from 'styled-components'

import Header from './sectionHeader'
import PortableText from './portableText'

const FoodItem = ({name, price, additional_options, _rawDescription}) => (
  <Wrapper>
    <Name>{name}</Name>
    <Description>
      <PortableText blocks={_rawDescription} />
    </Description>
  </Wrapper>

)

const Wrapper = styled.div`
  padding: 8px;
  white-space: noframes;
  font-size: 0.9rem;
`

const Name = styled(Header)`
  font-size: 1rem;
`

const Description = styled.div`
  line-height: 1.15;
`

export default FoodItem