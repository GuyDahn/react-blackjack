import React from 'react'
import { FullScreen } from '../structure/StructureComponents'
import { COLORS } from '../../consts/colors'
import { PlayerHand } from '../PlayerHand'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'

function GameScreenConnected(props) {
    function handleButton() {
        props.userGetCards(2)
    }
    return (
        <FullScreen color={COLORS.GREEN}>
            {/* TODO Remove this buton later*/}
            <button onClick={handleButton}>Add cards</button>
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