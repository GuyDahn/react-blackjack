import { initialState } from '../../consts/data/initialState'
import { actionTypes } from '../actions/actionTypes'

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.WIN:
            console.log('WIN')
            return Object.assign({}, state, {
                won: true
            })
        case actionTypes.LOSE:
            console.log('LOSE');
            return Object.assign({}, state, {
                lose: true
            })
            
        
        default:
            return state
    }
}