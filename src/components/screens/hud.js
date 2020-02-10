import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import { COLORS } from '../../consts/colors'

const HudContainer = styled.div`
position: absolute;
top: 20px;
left: 20px;
    & h1,
    h2,
    span {
      color: ${COLORS.WHITE};
      margin: 0;
      text-shadow: -5px 1px 0px ${COLORS.SHADOW}
    }
`

const MoneyHud = styled.div`
  h1 {
    margin: 0;
    font-size: 16px;
    color: ${COLORS.WHITE};
  }
  h2 {
    margin: 0;
    font-size: 36px;
    color: ${COLORS.WHITE};
    line-height: 30px;
  }
  span {
    margin: 0;
    font-size: 18px;
    color: ${COLORS.WHITE};
  }
`

const BetHud = styled.div`
  margin-top: 25px;
  h1 {
    margin: 0;
    font-size: 16px;
    color: ${COLORS.WHITE};
  }
  h2 {
    margin: 0;
    font-size: 24px;
    color: ${COLORS.WHITE};
    line-height: 24px;
  }
  span {
    margin: 0;
    font-size: 14px;
    color: ${COLORS.WHITE};
  }
`

export function HUD(props) {
    return (
        <HudContainer>
            <MoneyHud>
                <h1> money </h1>
                <h2>
                    <span> $ </span> {props.money}
                </h2>
            </MoneyHud>
            <BetHud>
                <h1> bet </h1>
                <h2>
                    <span> $ </span> 100
        </h2>
            </BetHud>
        </HudContainer>
    )
}

HUD.propTypes = {
    money: propTypes.number.isRequired
}