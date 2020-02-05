import React from 'react'
import { FullScreen } from '../../components/structure'
import { COLORS } from '../../styles/colors'
import { PlayerHand } from './components/PlayerHand'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'

function MainScreen(props) {
    return (
        <FullScreen color={COLORS.GREEN}>
            {/*
            <Hud />
            <HouseHand />
            <PlayerHand />
            <Menu />
            */}
            <PlayerHand />
        </FullScreen>
    )
}

export const GameScreen = connect(
    null,
    actions
)(MainScreen)