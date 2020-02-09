import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { COLORS } from '../../consts/colors'
import { FullScreen } from '../structure/StructureComponents'
import { PlayerHand } from '../PlayerHand'
import { EnemyHand } from '../EnemyHand'
import { HUD } from '../screens/hud'
import { GameResultNotification } from './GameResultNotification '
import { PlayerMenu } from './PlayerMenu'
import { startGame } from '../../redux/actions'

export function GameScreen() {
    const { cards, player, game } = useSelector(state => ({
        cards: state.cards,
        player: state.player,
        game: state.game
    }))

    const enemyCards = cards.enemyCards
    const playerCards = cards.playerCards

    const dispatch = useDispatch()
    if (!game.gameRunning) {
        dispatch(startGame())
    }

    return (
        <FullScreen color={COLORS.GREEN}>
            <HUD money={player.money} />
            <EnemyHand cards={enemyCards} />
            <PlayerHand cards={playerCards} />
            <PlayerMenu />
        </FullScreen>
    )
}
