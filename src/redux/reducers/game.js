import { initialState } from '../../consts/data/initialState'
import { actionTypes } from '../actions/actionTypes'

export default (state = initialState, action) => {
    switch (action) {
        case actionTypes.START_GAME:
            return Object.assign({}, state, {
                gameRunning: true
            })
        case actionTypes.STAND:
            return Object.assign({}, state, {
                playerStand: true
            })
        default:
            return state
    }
}