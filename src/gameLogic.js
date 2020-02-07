import { GameResult } from './classes/GameResult'
import { playerGetCards, enemyGetCards } from './redux/actions/actionTypes'

export default {
    startGame: dispatch => { },

    endTurn: (playerCards, enemyCards) => {
        return checkGameConditions(playerCards, enemyCards)
    }
}

function sumAllCards(cards) {
    return cards.reduce((sum, card) => sum + card.value, 0)
}

function checkGameConditions(playerCards, enemyCards) {
    const playerPoints = sumAllCards(playerCards)
    const enemyPoints = sumAllCards(enemyCards)
    let result = new GameResult(false, false)
    console.log(playerPoints, enemyPoints)

    if (playerPoints === 21 || enemyPoints > 21) {
        result.win = true
    } else if (enemyPoints === 21 || playerPoints > 21) {
        result.lose = true
    }

    return result
}

function removeCardFromPile(cards, cardID) {
    return cards.filter(card => card.id !== cardID)
}

export function getRandomCards(cards, numOfCards) {
    let cardIndex = 0
    let cardsToPush = []

    for (let i = 0; i < numOfCards; i++) {
        cardIndex = Math.random() * cards.length
        cardIndex = Math.floor(cardsIndex)
        const cardToPush = cards[cardIndex]
        cardsToPush.push(cardToPush)
        cards = removeCardFromPile(cards, cardToPush.id)
    }

    return { cards: cards, cardsToPush: cardsToPush }
}