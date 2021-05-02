import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CoffeeSection = ({title, list}) => (
  <section>
    <Title>{title}</Title>
    {list.map(({name, price}) => (
      <Coffee>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Coffee>
    ))}
  </section>
)

const Title = styled.h2`
  font-size: 1.4rem;
  font-family: 'Original Surfer', sans-serif;
  margin: 0;
`

const Coffee = styled.article`
  display: flex;
  justify-content: space-between;
  font-family: 'Work Sans', sans-serif;
  font-size: 1rem;
  line-height: 1.3;

  &:last-child {
    margin-bottom: 24px;
  }
`

const Name = styled.p`
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