import React from 'react'
import styled from 'styled-components'

const SectionHeader = ({children}) => (
  <Header>
    {children}
  </Header>
)

const Header = styled.h2`
  font-family: 'Original Surfer', sans-serif;
  font-size: 1.8rem;
  margin: 0;
  /* text-transform: uppercase; */
`

export default SectionHeader