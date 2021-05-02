import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ItemName = ({name}) => (
  <Name>{name}</Name>
)

const Name = styled.h6`
  font-size: inherit;
  margin: 0;
`
ItemName.propTypes = {
  name: PropTypes.string.isRequired
}

export default ItemName