import {FETCH_ALL_DRINKS, FETCH_DRINK_BY_ID, SEARCH_DRINK} from '../constants/Drink'

import {firebase} from '../constants/Config'

export function fetchAllDrinks() {
    return (dispatch) => {
            var drinks = firebase.database().ref().child('drinks');
            console.log(drinks);
            dispatch({
                type: FETCH_ALL_DRINKS,
                payload: drinks
        });

    }
}