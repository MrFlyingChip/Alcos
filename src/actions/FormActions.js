import {
    ADD_NEW_RESPOND,
    ADD_NEW_MANUFACTURER,
    ADD_BAR
} from "../constants/Form";
import {firebase} from '../constants/Config'
import {browserHistory} from "react-router";


export function addNewRespond(payload) {
    return (dispatch) => {
        var newRespond = firebase.database().ref('responds').push().key;
        firebase.database().ref('responds').child(newRespond).set({
            email: payload.email,
            name: payload.name,
            respond: payload.respond
        });
        alert('Respond sent!');
        browserHistory.push('/');
        dispatch({
            type: ADD_NEW_RESPOND,
            payload: {}
        })
    }
}