import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const SectionHeader = ({title}) => (
  <Header>
    {title}
  </Header>
)

const Header = styled.h2`
  font-family: 'Original Surfer', sans-serif;
  font-size: 1.8rem;
`

Section.propTypes = {
  title: PropTypes.string.isRequired
}

export default SectionHeader