import React, { useRef } from 'react'
import styled from 'styled-components'
import { useReactToPrint } from 'react-to-print'
import { StaticImage } from 'gatsby-plugin-image'

import PrintButton from '../components/printButton';
import LetterheadWrapper from '../components/letterheadWrapper';
import FoodItem from './foodItem';

const FoodMenu = ({list}) => {
  const menuEl = useRef()

  const handlePrint = useReactToPrint({
    content: () => menuEl.current
  })

  console.log(list)
  return (
    <div style={{position: 'relative'}}>
      <PrintButton handlePrint={handlePrint} />
      <MenuWrapper ref={menuEl}>
        <WhiteBackground>
          <FoodWrapper>
            {list.map(item => (
              <FoodItem {...item} />
            ))}
          </FoodWrapper>        
          <LogoWrapper>
            <StaticImage
              src="../images/main_logo.png"
              width={150}
              height={150}
              quality={100}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="The Deck Logo"
            />
          </LogoWrapper>
        </WhiteBackground>
      </MenuWrapper>
    </div>
  )
}

const MenuWrapper = styled(LetterheadWrapper)`
  padding: 16px;
  padding-bottom: 160px;  
`

const WhiteBackground = styled.div`
  position: relative;
  background: white; 
  height: 100%;
  padding: 24px;
`

const FoodWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

`

const LogoWrapper = styled.div`
  position: absolute;
  bottom: -75px;
  left: 50%;
  transform: translateX(-75px);
  width: 150px;
  height: 150px;
`

export default FoodMenu