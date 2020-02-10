import { put, takeEvery, select, delay } from 'redux-saga/effects'
import { actionTypes } from './actions/actionTypes'
import gameLogic from '../gameLogic'
import {
    playerLose,
    playerWin,
    playerGetCards,
    enemyGetCards,
    playerDraw,
    buttonsState
} from './actions'
import { endGameDelay, cardAnimationTime } from '../consts/animations'

export default function* root() {
    yield takeEvery(actionTypes.PLAYER_GET_CARDS, endTurn)
    yield takeEvery(actionTypes.ENEMY_GET_CARDS, endTurn)
    yield takeEvery(actionTypes.START_GAME, startGame)
    yield takeEvery(actionTypes.STAND, enemyTurn)
}

function* startGame() {
    yield put(playerGetCards(2))
    yield put(enemyGetCards(2))
}

function* endTurn(action) {
    yield put(buttonState(false))

    const state = yield select()
    const playerCards = state.cards.playerCards
    const enemyCards = state.cards.enemyCards

    let gameResult = yield gameLogic.endTurn(playerCards, enemyCards)

    // to create a 'human-like experience'
    yield delay(endGameDelay)

    if (gameResult.result.win) yield put(playerWin())
    if (gameResult.result.lose) yield put(playerLose())

    if (action.type === actionTypes.PLAYER_GET_CARDS) { yield put(buttonsState(true)) }
}

function* finalTurn() {
    console.log('FINAL')
    yield put(buttonsState(false))

    const state = yield select()
    yield delay(endGameDelay)

    let gameResult = yield gameLogic.endTurn(
        state.cards.playerCards,
        state.cards.enemyCards
    )
    gameResult = yield gameLogic.enemyStand(
        gameResult.playerPoints,
        gameResult.enemyPoints
    )

    if (gameResult.result.win) yield put(playerWin())
    if (gameResult.result.lose) yield put(playerLose())
    if (gameResult.result.draw) yield put(playerDraw())
}

function* enemyTurn() {
    yield put(buttonsState(false))

    let state = yield select()
    let enemyWillHit = gameLogic.enemyWillHit(
        state.cards.playerCards,
        state.cards.enemyCards
    )

    while (enemyWillHit) {
        // to create a 'human-like experience'
        yield delay(cardAnimationTime)

        yield put(enemyGetCards(1))
        state = yield select()
        enemyWillHit = yield gameLogic.enemyWillHit(
            state.cards.playerCards,
            state.cards.enemyCards
        )
    }

    yield finalTurn()
}