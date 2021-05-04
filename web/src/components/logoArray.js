import React from 'react'
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"

import Spread from './spread'

const LogoArray = () => (
  <Spread style={{alignItems: 'center', height: '74px', overflow: 'hidden'}}>
    <ImageWrapper>
      <StaticImage
        src="../images/bull_logo.png"
        width={88}
        height={88}
        quality={100}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="The Collins Quarter Logo"
      />
    </ImageWrapper>
    <ImageWrapper>
      <StaticImage
        src="../images/fitzroy_logo.jpg"
        width={67}
        height={64}
        quality={100}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="The Fitzroy logo"
      />
    </ImageWrapper>
    <ImageWrapper>
      <StaticImage
        src="../images/forsyth_logo.jpg"
        width={67}
        height={73}
        quality={100}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="The Collins Quarter at Forsyth logo"
      />
    </ImageWrapper>
  </Spread>
)

const ImageWrapper = styled.div`
  flex-grow: 1;
  width: 67px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default LogoArray