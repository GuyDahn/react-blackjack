import React from 'react'
import { FullScreen } from '../../components/structure'
import { COLORS } from '../../styles/colors'
import { PlayerHand } from './components/PlayerHand'

export function GameScreen() {
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