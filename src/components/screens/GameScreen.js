import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { COLORS } from '../../consts/colors'
import { FullScreen } from '../structure/StructureComponents'
import { PlayerHand } from '../PlayerHand'
import { EnemyHand } from '../EnemyHand'
import { HUD } from '../screens/hud'
import { GameResultNotification } from './GameResultNotification '
import { PlayerMenu } from './PlayerMenu'
import { startGame } from '../../redux/actions'

const HandsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const HandRow = styled.div`
  margin-top: 50px;
`

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

    const showNotification =
        player.result.win || player.result.lose || player.result.draw

    return (
        <FullScreen color={COLORS.GREEN}>
            {showNotification && <GameResultNotification result={player.result} />}
            <HUD money={player.money} />
            <EnemyHand cards={enemyCards} showSecondCard={game.playerStand} />
            <HandsContainer>
                <HandRow>
                    <EnemyHand cards={enemyCards} showSecondCard={game.playerStand} />
                </HandRow>
                <HandRow>
                    <PlayerHand cards={enemyCards} />
                </HandRow>
            </HandsContainer>
        </FullScreen>
    )
}
