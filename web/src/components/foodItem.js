import React from 'react'
import styled from 'styled-components'

import Header from './sectionHeader'
import PortableText from './portableText'

const FoodItem = ({name, price, additional_options, _rawDescription, is_gluten_free}) => (
  <Wrapper>
    <Name>
      {name}
      {' '}
      { price && <Price>{price}</Price> }
      { is_gluten_free && <Gluten>{' '}GF</Gluten> }
    </Name>
    <Description>
      <PortableText blocks={_rawDescription} />
    </Description>
    <Options>
      {additional_options.map(({price, context}) => (
        <div key={context}>
          {context}
          {' '}
          {price && <OptPrice>{price}</OptPrice>}
          {' '}
        </div>
      ))}
    </Options>
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
  font-size: 0.8rem;
  font-weight: 900;
`

const Description = styled.div`
  position: relative;
  line-height: 1.15;
`

const Price = styled.span`
  font-weight: 600;

  &:before {
    content: '$';
  }
`
const OptPrice = styled.span`
  font-weight: 600;

  &:before {
    content: '$';
  }
`

const Options = styled.div`
  font-weight: 600;
`

export default FoodItem