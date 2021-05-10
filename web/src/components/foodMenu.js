import React, { useRef } from 'react'
import styled from 'styled-components'
import { useReactToPrint } from 'react-to-print'
import { StaticImage } from 'gatsby-plugin-image'

import PrintButton from '../components/printButton';
import LetterheadWrapper from '../components/letterheadWrapper';
import Header from './sectionHeader'
import FoodItem from './foodItem';
import FoodStack from './foodStack';

const FoodMenu = ({foodList, kidsList, dessertList}) => {
  const menuEl = useRef()

  const handlePrint = useReactToPrint({
    content: () => menuEl.current
  })

  console.log(foodList)
  // split foodList into 3 separate array to stack more nicely
  let m, n
  let first, second, third
  
  m = Math.ceil(foodList.length / 3);
  n = Math.ceil(2 * foodList.length / 3);

  first = foodList.slice(0, m);
  second = foodList.slice(m, n);
  third = foodList.slice(n, foodList.length);
  
  return (
    <div style={{position: 'relative'}}>
      <PrintButton handlePrint={handlePrint} />
      <MenuWrapper ref={menuEl}>
        <WhiteBackground>
          <FoodWrapper>
            <FoodStack list={first} />
            <FoodStack list={second}>
              <SpacerLine />
              <Header>Dessert</Header>
              {dessertList.map(item => (
                <FoodItem key={item.id} {...item} />
              ))}
            </FoodStack>
            <FoodStack list={third}>
            <SpacerLine />
              <Header>Kids Menu</Header>
              {kidsList.map(item => (
                <FoodItem key={item.id} {...item} />
              ))}
            </FoodStack>
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

const SpacerLine = styled.div`
  height: 2px;
  width: calc(100% - 16px);
  position: relative;
  background-color: black;
  margin-bottom: 8px;
`

export default FoodMenu