import React from 'react'
import styled from 'styled-components'

const SectionHeader = ({children, ...props}) => (
  <Header {...props}>
    {children}
  </Header>
)

const Header = styled.h2`
  font-family: 'Original Surfer', sans-serif;
  font-size: 1.6rem;
  margin: 0;
  text-align: inherit;
  text-transform: uppercase;
`

export default SectionHeader