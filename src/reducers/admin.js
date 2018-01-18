import {ADD_NEW_DRINK, ADD_NEW_COCKTAIL, ADD_NEW_BAR} from '../constants/Admin'

const initialState = {};
export default function adminstate(state = initialState, action) {
    switch (action.type) {
        case ADD_NEW_DRINK:
            return {
                ...state
            };
        case ADD_NEW_COCKTAIL:
            return {
                ...state
            };
        case ADD_NEW_BAR:
            return {
                ...state
            };
        default:
            return state
    }
}