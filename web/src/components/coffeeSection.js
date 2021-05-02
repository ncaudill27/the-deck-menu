import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Spread from '../components/spread'
import Name from '../components/itemName'

const CoffeeSection = ({title, list}) => (
  <Wrapper>
    <Title>{title}</Title>
    {list.map(({name, price}) => (
      <Spread>
        <Name name={name} />
        <Price>{price}</Price>
      </Spread>
    ))}
  </Wrapper>
)

const Wrapper = styled.section`
  font-family: 'Work Sans', sans-serif;
`
const Title = styled.h2`
  font-size: 1.4rem;
  font-family: 'Original Surfer', sans-serif;
  margin: 0;
`

const Price = styled.p`
  margin: 0;  
`

CoffeeSection.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired
}

export default CoffeeSection