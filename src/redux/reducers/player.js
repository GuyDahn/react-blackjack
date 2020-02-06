import { initialState } from '../../consts/data/initialState'
import { actionTypes } from '../actions/actionTypes'
import { GameResult } from '../../classes/GameResult'

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.WIN:
            console.log('WIN')
            return Object.assign({}, state, {
                result: new GameResult(true, false)
            })
        case actionTypes.LOSE:
            console.log('LOSE')
            return Object.assign({}, state, {
                result: new GameResult(false, true)
            })

        default:
            return state
    }
}