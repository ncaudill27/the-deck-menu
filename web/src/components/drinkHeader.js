import React from 'react'
import styled from 'styled-components'

import Header from '../components/sectionHeader'

const DrinkHeader = ({children}) => (
 <StyledHeader>
   {children}
 </StyledHeader> 
)

const StyledHeader = styled(Header)`
    position: absolute;
    left: 0;
    top: -28.8px;
    width: 100%;
    text-align: center;
    /* background: hsla(161, 86%, 84%, 1) 100%; */
`

export default DrinkHeader