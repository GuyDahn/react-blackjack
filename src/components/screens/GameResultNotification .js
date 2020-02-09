import React from 'react'
import PropTypes from 'prop-types'
import { GameResult } from '../../classes/GameResult'
import styled from 'styled-components'
import { COLORS } from '../../consts/colors'

const NotificationContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: calc(50% - 50vw);
  top: calc(50% - 50vh);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  visibility: ${props => (props.hidden ? 'hidden' : 'auto')};
`
const ResultText = styled.h1`
  color: white;
  text-shadow: -2px 4px 0px ${COLORS.SHADOW};
  margin: 0;
`

export function GameResultNotification(props) {
    return (
        <NotificationContainer>
            <div>
                {props.result.win && (
                    <div>
                        <ResultText>You Win!</ResultText>
                    </div>
                )}
                {props.result.lose && (
                    <div>
                        <ResultText>You Lose!</ResultText>
                    </div>
                )}
                {props.result.draw && (
                    <div>
                        <resultText>Round Draw!</resultText>
                    </div>
                )}
            </div>
        </NotificationContainer>
    )
}

GameResultNotification.PropTypes = {
    result: PropTypes.instanceOf(GameResult)
}