import React from 'react'
import { FullScreen } from '../structure/StructureComponents'
import { COLORS } from '../../consts/colors'
import { PlayerHand } from '../PlayerHand'
import { EnemyHand } from '../EnemyHand'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'

function GameScreenConnected(props) {
    function handleUserButton() {
        props.userGetCards(1)
    }
    function handleEnemyButton() {
        props.enemyGetCards(1)
    }

    return (
        <FullScreen color={COLORS.GREEN}>
            {/* TODO Remove this buton later*/}
            <button onClick={handleUserButton}>Add cards</button>
            <button onClick={handleEnemyButton}>Add enemy cards</button>
            {/*
            <Hud />
            <HouseHand />
            <Menu />
            */}
            <EnemyHand cards={props.cards.enemyCards} />
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