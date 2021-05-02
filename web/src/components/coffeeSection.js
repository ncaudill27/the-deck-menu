import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Wrapper from '../components/sectionWrapper'
import Spread from '../components/spread'
import Name from '../components/itemName'
import Price from '../components/itemPrice'

const CoffeeSection = ({title, list}) => (
  <Wrapper>
    <Title>{title}</Title>
    {list.map(({id, name, price}) => (
      <Spread key={id}>
        <Name name={name} />
        <Price price={price} />
      </Spread>
    ))}
  </Wrapper>
)

const Title = styled.h2`
  font-size: 1.4rem;
  font-family: 'Original Surfer', sans-serif;
  margin: 0;
`

CoffeeSection.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired
}

export default CoffeeSection