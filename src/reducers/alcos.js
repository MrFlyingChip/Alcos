import {FETCH_ALL_DRINKS, FETCH_DRINK_BY_ID, SEARCH_DRINK} from '../constants/Drink'

let initialState = {
    drinks: [],
    drink: {},
    cocktails: [],
    cocktail: {},
    bar: {},
    bars: [],
    top: [],
    new: [],
    favourite_drinks: [],
    favourite_cocktails: [],
    favourite_bars: [],
    search: []
};

export default function page(state = initialState, action) {
    switch (action.type) {
        case FETCH_ALL_DRINKS:
            return {...state, drinks: action.payload};
        default:
            return state;
    }
}