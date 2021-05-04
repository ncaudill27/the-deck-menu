import React from 'react'
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"

import Spread from './spread'

const LogoArray = () => (
  <Grid>
    <ImageWrapper>
      <StaticImage
        src="../images/bull_logo.png"
        width={67}
        height={73}
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
  </Grid>
)

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 84px 1fr;
`

const ImageWrapper = styled.div`
  height: 73px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default LogoArray