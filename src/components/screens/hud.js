import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const HudContainer = styled.div`
position: absolute;
top: 10px;
left: 10px;
    & h1 {
      color: white;
      margin: 0;
    }
`

export function HUD(props) {
    return (
        <HudContainer>
            <h1>{props.money}</h1>
        </HudContainer>
    )
}

HUD.PropTypes = {
    money: PropTypes.number.isRequired
}