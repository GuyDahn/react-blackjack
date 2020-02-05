import { actionTypes } from './actionTypes'

export function userCards(numberOfCards) {
    return {
        type: actionTypes.USER_GET_CARDS,
        payload: numberOfCards
    }
}

export function enemyGetCards(numberOfCards) {
    return {
        type: actionTypes.ENEMY_GET_CARDS,
        payLoad: numberOfCards
    }
}

export function removeCard(cardId) {
    return {
        type: actionTypes.REMOVE_CARDS,
        payload: cardId
    }
}