import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { COLORS } from '../consts/colors'

const cardBack = require('../images/cards/back01.gif')

const CardContainer = styled.div`
  & img {
    width: 100px;
    display: block;
    position: relative
    filter: drop-shadow(-4px 5px 0px ${COLORS.SHADOW});
  }
`

export function CardComponent(props) {
  return (
    <CardContainer>
      <img src={props.backface ? cardBack : props.image} alt={props.name} />
    </CardContainer>
  )
}

CardComponent.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  backface: PropTypes.bool
}