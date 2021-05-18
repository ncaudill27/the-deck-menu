import React from 'react'
import styled from 'styled-components'

import Spread from '../components/spread'
import BullLogo from '../images/svg/bull_logo.svg'
import FitzroyLogo from '../images/svg/fitzroy_logo.svg'
import ParkLogo from '../images/svg/forsyth_logo.svg'

const LogoArray = () => (
  <Spread>
    <ImageWrapper>
      <BullLogo />
    </ImageWrapper>
    <ImageWrapper>
      <FitzroyLogo />
    </ImageWrapper>
    <ImageWrapper>
      <ParkLogo />
    </ImageWrapper>
  </Spread>
)

const ImageWrapper = styled.div`
  width: 73px;
  height: 73px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default LogoArray