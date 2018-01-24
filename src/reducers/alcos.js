import {FETCH_ALL_DRINKS, FETCH_DRINK_BY_ID, SEARCH_DRINK, FETCH_ALL_TYPES} from '../constants/Drink'
import {FETCH_ALL_COCKTAILES, FETCH_COCKTAIL_BY_ID, SEARCH_COCKTAIL} from '../constants/Cocktail'
import {FETCH_ALL_BARS, FETCH_BAR_BY_ID, SEARCH_BAR} from '../constants/Bar'
import {FETCH_ALL_COMMENTS, ADD_NEW_COMMENT} from '../constants/Comment'

let initialState = {
    drinks: [],
    drink: {},
    cocktails: [],
    cocktail: {},
    bar: {},
    bars: [],
    typesDrinks: [],
    top: [],
    new: [],
    comments: [],
    favourite_drinks: [],
    favourite_cocktails: [],
    favourite_bars: [],
    search: []
};

export default function page(state = initialState, action) {
    switch (action.type) {
        case FETCH_ALL_DRINKS:
            return {...state, drinks: action.payload};
        case FETCH_DRINK_BY_ID:
            return {...state, drink: action.payload};
        case FETCH_ALL_COCKTAILES:
            return {...state, cocktails: action.payload};
        case FETCH_COCKTAIL_BY_ID:
            return {...state, cocktail: action.payload};
        case FETCH_ALL_BARS:
            return {...state, bars: action.payload};
        case FETCH_BAR_BY_ID:
            return {...state, bar: action.payload};
        case FETCH_ALL_TYPES:
            return {...state, typesDrinks: action.payload};
        case FETCH_ALL_COMMENTS:
            return {...state, comments: action.payload};
        case ADD_NEW_COMMENT:
            return {...state};
        default:
            return state;
    }
}