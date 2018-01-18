import {ADD_NEW_RESPOND, ADD_NEW_MANUFACTURER, ADD_BAR} from '../constants/Form'

const initialState = {};
export default function adminstate(state = initialState, action) {
    switch (action.type) {
        case ADD_NEW_RESPOND:
            return {
                ...state
            };
        case ADD_NEW_MANUFACTURER:
            return {
                ...state
            };
        case ADD_BAR:
            return {
                ...state
            };
        default:
            return state
    }
}