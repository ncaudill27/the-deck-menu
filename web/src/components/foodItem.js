import React from 'react'
import styled from 'styled-components'

import Header from './sectionHeader'
import PortableText from './portableText'

const FoodItem = ({name, price, additional_options, _rawDescription, is_gluten_free}) => (
  <Wrapper>
    <Name>
      {name}
      { is_gluten_free && <Gluten>{' '}GF</Gluten>}
    </Name>
    <Description>
      <PortableText blocks={_rawDescription} />
      { price && <Price>{price}</Price> }
      <Options>
        {additional_options.map(({price, context}) => (
          <>
            {context}
            {' '}
            {price && <Price>{price}</Price>}
            {' '}
          </>
        ))}
      </Options>
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

const Gluten = styled.span`
  font-family: 'Work Sans', sans-serif;
  font-weight: 900;
`

const Description = styled.div`
  line-height: 1.15;
`

const Price = styled.span`
  font-weight: 600;

  &:before {
    content: '$';
  }
`

const Options = styled.div`
  font-weight: 600;
`

export default FoodItem