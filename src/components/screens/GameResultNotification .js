import React from 'react'
import PropTypes from 'prop-types'
import { GameResult } from '../../classes/GameResult'
import styled from 'styled-components'
import { COLORS } from '../../consts/colors'
// import { motion } from "framer-motion"
import { NotificationContainer } from "../structure/ModelComponents";

// const NotificationContainer = styled.div({
//     visible: { opacity: 1, transition: { duration: 300 } },
//     hidden: { opacity: 0 }
// })

// const StyledNotificationContainer = styled(NotificationContainer)`
//   position: absolute;
//   width: 100vw;
//   height: 100vh;
//   left: 0;
//   top: 0;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 10;
//   background: ${COLORS.SHADOW};
// `
const ResultText = styled.h1`
  color: white;
  text-shadow: -2px 4px 0px ${props => props.color};
  margin: 0;
`

export function GameResultNotification(props) {

    return (
        <NotificationContainer pose='visible' initialPose='hidden'>
            <div>
                {props.result.win && (
                    <ResultText color={COLORS.BLUE}> You Win! </ResultText>
                )}
                {props.result.lose && (
                    <ResultText color={COLORS.RED}> You Lose! </ResultText>
                )}
                {props.result.draw && (
                    <ResultText color={COLORS.GREEN}> Draw! </ResultText>
                )}
            </div>
        </NotificationContainer>
    )
}

GameResultNotification.propTypes = {
    result: PropTypes.instanceOf(GameResult)
}