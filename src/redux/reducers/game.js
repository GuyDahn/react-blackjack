import { initialState } from '../../consts/data/initialState'
import { actionTypes } from '../actions/actionTypes'

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.START_GAME:
            return Object.assign({}, state, {
                gameRunning: true
            })
        case actionTypes.STAND:
            return Object.assign({}, state, {
                playerStand: true
            })
        case actionTypes.BUTTONS_ENABLED:
            return Object.assign({}, state, {
                buttonsEnabled: actionTypes.payload
            })
        case actionTypes.MAKE_BET:
            return Object.assign({}, state, {
                betValue: actionTypes.payload
            })
        default:
            return state
    }
}