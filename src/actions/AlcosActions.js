import {FETCH_ALL_DRINKS, FETCH_DRINK_BY_ID, SEARCH_DRINK, FETCH_ALL_TYPES} from '../constants/Drink'
import {FETCH_ALL_COCKTAILES, FETCH_COCKTAIL_BY_ID, SEARCH_COCKTAIL} from '../constants/Cocktail'
import {FETCH_ALL_BARS, FETCH_BAR_BY_ID, SEARCH_BAR} from '../constants/Bar'
import {FETCH_ALL_COMMENTS, ADD_NEW_COMMENT} from '../constants/Comment'
import {firebase} from '../constants/Config'

export function addNewComment(payload) {
    return (dispatch) => {
        var newRespond = firebase.database().ref('responds').push().key;
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();
        if(dd<10) {
            dd = '0'+dd
        }
        if(mm<10) {
            mm = '0'+mm
        }
        today = mm + '/' + dd + '/' + yyyy;
        firebase.database().ref('comments/' + payload.id).child(newRespond).set({
            rate: payload.rate,
            text: payload.comment,
            id: newRespond,
            user: firebase.auth().currentUser.uid,
            date: today
        });
        firebase.database().ref('comments' + '/' + payload.id).once('value', function (snapshot) {
            var comments = [];
            snapshot.forEach(function (childSnapshot) {
                var value = childSnapshot.val().rate;
                comments.push(value);
            });
            var sum = 0;
            for (var i = 0; i < comments.length; i++) {
                sum += +comments[i];
            }
            var rating = sum/comments.length;
            firebase.database().ref(payload.type + '/' + payload.id).update({
                rating: rating,
                votes: comments.length
            });
            dispatch({
                type: ADD_NEW_COMMENT,
                payload: {}
            })
        });

    }

}

export function fetchAllComments(id) {
    return (dispatch) => {
        firebase.database().ref('comments/' + id).once('value', function (snapshot) {
            var comments = [];
            snapshot.forEach(function (childSnapshot) {
                var value = childSnapshot.val();
                comments.push(value);
            });
            dispatch({
                type: FETCH_ALL_COMMENTS,
                payload: comments
            });
        });
    }
}

export function fetchAllTypes(){
    return (dispatch) => {
        firebase.database().ref('Types').once('value', function (snapshot) {
            var typesDrinks = [];
            snapshot.forEach(function (childSnapshot) {
                var value = childSnapshot.val();
                typesDrinks.push(value);
            });
            console.log(typesDrinks);
            dispatch({
                type: FETCH_ALL_TYPES,
                payload: typesDrinks
            });
        });
    }
}
export function fetchAllDrinks() {
    return (dispatch) => {
        firebase.database().ref('drinks').once('value', function (snapshot) {
            var drinks = [];
            snapshot.forEach(function (childSnapshot) {
                var value = childSnapshot.val();
                drinks.push(value);
            });
            dispatch({
                type: FETCH_ALL_DRINKS,
                payload: drinks
            });
        });
    }
}

export function fetchDrinkById(id){
    return(dispatch) => {
        firebase.database().ref('drinks/' + id).once('value', function (snapshot) {
            dispatch({
                type: FETCH_DRINK_BY_ID,
                payload: snapshot.val()
            });
        });
    }
}

export function fetchAllCocktails() {
    return (dispatch) => {
        firebase.database().ref('cocktails').once('value', function (snapshot) {
            var cocktails = [];
            snapshot.forEach(function (childSnapshot) {
                var value = childSnapshot.val();
                cocktails.push(value);
            });
            dispatch({
                type: FETCH_ALL_COCKTAILES,
                payload: cocktails
            });
        });
    }
}

export function fetchCocktailById(id){
    return(dispatch) => {
        firebase.database().ref('cocktails/' + id).once('value', function (snapshot) {
            dispatch({
                type: FETCH_COCKTAIL_BY_ID,
                payload: snapshot.val()
            });
        });
    }
}

export function fetchAllBars() {
    return (dispatch) => {
        firebase.database().ref('pubs').once('value', function (snapshot) {
            var bars = [];
            snapshot.forEach(function (childSnapshot) {
                var value = childSnapshot.val();
                bars.push(value);
            });
            dispatch({
                type: FETCH_ALL_BARS,
                payload: bars
            });
        });
    }
}

export function fetchBarById(id){
    return(dispatch) => {
        firebase.database().ref('pubs/' + id).once('value', function (snapshot) {
            dispatch({
                type: FETCH_BAR_BY_ID,
                payload: snapshot.val()
            });
        });
    }
}
