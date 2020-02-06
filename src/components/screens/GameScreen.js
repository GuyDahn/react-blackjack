import React from 'react'
import { FullScreen } from '../structure/StructureComponents'
import { COLORS } from '../../consts/colors'
import { PlayerHand } from '../PlayerHand'
import { EnemyHand } from '../EnemyHand'
import { useSelector, useDispatch } from 'react-redux'
import { playerGetCards, enemyGetCards } from '../../redux/actions'
import { HUD } from '../screens/hud'
import { GameResultNotification } from './GameResultNotification '

export function GameScreen() {
    const { cards, player } = useSelector(state => ({
        cards: state.cards,
        player: state.player
    }))

    const enemyCards = cards.enemyCards
    const playerCards = cards.playerCards
    const dispatch = useDispatch()

    function handlePlayerButton() {
        dispatch(playerGetCards(1))
    }

    function handleEnemyButton() {
        dispatch(enemyGetCards(1))
    }

    return (
        <FullScreen color={COLORS.GREEN}>
            {/*temporarily buttons to remove later*/}
            <button onClick={handlePlayerButton}>Add cards</button>
            <button onClick={handleEnemyButton}>Add enemy cards</button>
            <GameResultNotification result={player.result} />
            {/*
            <HouseHand />
            <Menu />
            */}
            <HUD money={player.money} />
            <EnemyHand cards={enemyCards} />
            <PlayerHand cards={playerCards} />
        </FullScreen>
    )
}
