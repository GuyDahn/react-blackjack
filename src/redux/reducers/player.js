import { initialState } from '../../consts/data/initialState'
import { actionTypes } from '../actions/actionTypes'
import { GameResult } from '../../classes/GameResult'

export default (state = initialState, action) => {
    switch (action) {
        case actionTypes.WIN:
            return Object.assign({}, state, {
                result: new GameResult(true, false, false)
            })

        case actionTypes.LOSE:
            return Object.assign({}, state, {
                result: new GameResult(false, true, false)
            })

        case actionTypes.DRAW:
            return Object.assign({}, state, {
                result: new GameResult(false, false, true)
            })

        case actionTypes.RESET_GAME_RESULT:
            return Object.assign({}, state, {
                result: new GameResult(false, false, false)
            })


        case actionTypes.UPDATE_MONEY:
            return Object.assign({}, state, {
                money: action.payload
            })

        default:
            return state
    }
}