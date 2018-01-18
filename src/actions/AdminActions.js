import {
    ADD_NEW_DRINK,
    ADD_NEW_COCKTAIL,
    ADD_NEW_BAR
} from "../constants/Admin";
import {firebase} from '../constants/Config'
import {browserHistory} from "react-router";

export function addNewDrink(payload) {
    return (dispatch) => {
        var newDrink = firebase.database().ref('drinks').push().key;
        var storageRef = firebase.storage().ref('Drinks/' + newDrink);
        storageRef.put(payload.image)
            .then(function (snapshot) {
                firebase.database().ref('drinks').child(newDrink).set({
                    country: payload.country,
                    description: payload.description,
                    id: newDrink,
                    imageUrl: snapshot.downloadURL,
                    kind: payload.kind,
                    maker: payload.maker,
                    name: payload.name,
                    rating: 0,
                    votes: 0,

                });
                alert('Added new drink!');
                browserHistory.push('/admin');
                dispatch({
                    type: ADD_NEW_DRINK,
                    payload: {}
                })
            });
    }
}

export function addNewCocktail(payload) {
    return (dispatch) => {
        var newCocktail = firebase.database().ref('cocktails').push().key;
        var storageRef = firebase.storage().ref('Cocktails/' + newCocktail);
        storageRef.put(payload.image)
            .then(function (snapshot) {
                firebase.database().ref('cocktails').child(newCocktail).set({
                    description: payload.description,
                    id: newCocktail,
                    imageUrl: snapshot.downloadURL,
                    receipt: payload.receipt,
                    name: payload.name,
                    rating: 0,
                    votes: 0,

                });
                alert('Added new cocktail!');
                browserHistory.push('/admin');
                dispatch({
                    type: ADD_NEW_DRINK,
                    payload: {}
                })
            });
    }
}

    export function addNewBar(payload) {
        return (dispatch) => {
            var newBar = firebase.database().ref('pubs').push().key;
            var storageRef = firebase.storage().ref('Bars/' + newBar);
            storageRef.put(payload.image)
                .then(function (snapshot) {
                    firebase.database().ref('pubs').child(newBar).set({
                        address: payload.address,
                        description: payload.description,
                        averageCheckPrice: payload.averageCheckPrice,
                        id: newBar,
                        lat: payload.lat,
                        lng: payload.lng,
                        photo: snapshot.downloadURL,
                        phone: payload.phone,
                        name: payload.name,
                        rating: 0,
                        votes: 0,
                        workingHours: payload.workingHours
                    });
                    alert('Added new bar!');
                    browserHistory.push('/admin');
                    dispatch({
                        type: ADD_NEW_BAR,
                        payload: {}
                    })
                });
        }
    }
