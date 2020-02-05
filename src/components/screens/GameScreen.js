import React from 'react'
import { FullScreen } from '../../components/structure'
import { COLORS } from '../../consts/colors'
import { PlayerHand } from './components/PlayerHand'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'

function GameScreenConnected(props) {
    return (
        <FullScreen color={COLORS.GREEN}>
            {/*
            <Hud />
            <HouseHand />
            <Menu />
            */}
            <PlayerHand cards={props.cards.userCards} />
        </FullScreen>
    )
}

const mapStateToProps = state => {
    const { cards } = state
    return { cards }
}
export const GameScreen = connect(
    mapStateToProps,
    actions
)(GameScreenConnected)