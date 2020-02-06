import React from 'react'
import { useSelector } from 'react-redux'

import { COLORS } from '../../consts/colors'
import { FullScreen } from '../structure/StructureComponents'
import { PlayerHand } from '../PlayerHand'
import { EnemyHand } from '../EnemyHand'
import { HUD } from '../screens/hud'
import { GameResultNotification } from './GameResultNotification '
import { PlayerMenu } from './PlayerMenu'

export function GameScreen() {
    const { cards, player } = useSelector(state => ({
        cards: state.cards,
        player: state.player
    }))

    const enemyCards = cards.enemyCards
    const playerCards = cards.playerCards

    return (
        <FullScreen color={COLORS.GREEN}>
            <HUD money={player.money} />
            <EnemyHand cards={enemyCards} />
            <PlayerHand cards={playerCards} />
            <PlayerMenu />
        </FullScreen>
    )
}
