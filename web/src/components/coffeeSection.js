import React from 'react'
import PropTypes from 'prop-types'

import Subheader from '../components/subheader'
import Spread from '../components/spread'
import Name from '../components/itemName'
import Price from '../components/itemPrice'

const CoffeeSection = ({title, list}) => (
  <>
    <Subheader>{title}</Subheader>
    {list.map(({id, name, price}) => (
      <Spread key={id}>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Spread>
    ))}
  </>
)

CoffeeSection.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired
}

export default CoffeeSection