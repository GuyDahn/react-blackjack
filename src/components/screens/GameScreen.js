import React from 'react'
import { FullScreen } from '../structure/StructureComponents'
import { COLORS } from '../../consts/colors'
import { PlayerHand } from '../PlayerHand'
import { EnemyHand } from '../EnemyHand'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'
import gameLogic from '../../gameLogic'

function GameScreenConnected(props) {
    const enemyCards = props.cards.enemyCards
    const playerCards = props.cards.playerCards

    function handleUserButton() {
        console.log('player');
        props.userGetCards(1)
    }
    function handleEnemyButton() {
        console.log('enemy');
        props.enemyGetCards(1)
    }

    return (
        <FullScreen color={COLORS.GREEN}>
            {/*temporarily buttons to remove later*/}
            <button onClick={handleUserButton}>Add cards</button>
            <button onClick={handleEnemyButton}>Add enemy cards</button>
            {/*
            <Hud />
            <HouseHand />
            <Menu />
            */}
            <EnemyHand cards={enemyCards} />
            <PlayerHand cards={userCards} />
        </FullScreen>
    )
}

const mapStateToProps = state => {
    const { cards, player } = state
    return { cards, player }
}
export const GameScreen = connect(
    mapStateToProps,
    actions
)(GameScreenConnected)