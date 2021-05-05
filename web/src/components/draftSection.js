import React from 'react'
import styled from 'styled-components'

import DrinkSection from '../components/drinkSection'
import Name from '../components/itemName'
import Context from '../components/itemContext'
import DrinkHeader from './drinkHeader'

const DraftSection = ({list}) => (
  <DrinkSection>
    <DrinkHeader>Drafts</DrinkHeader>
      {list.map(({id, name, brewery}) => (
        <Draft key={id}>
          <Name>{name}</Name>
          <Context>
            {brewery}
          </Context>
        </Draft>
      ))}
  </DrinkSection>
)

const Draft = styled.article`
  &:not(:last-of-type) {
    margin-bottom: 16px;
  }
`

export default DraftSection