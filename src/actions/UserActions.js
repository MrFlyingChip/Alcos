import {
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    SIGNUP_FAIL,
    SIGNUP_SUCCESS,
    LOGOUT,
    FETCH_USER,
    FETCH_USER_DRINKS,
    FETCH_USER_COCKTAILS,
    FETCH_USER_BARS,
    FETCH_USER_BY_ID
} from '../constants/User';
import {firebase} from '../constants/Config'
import {browserHistory} from 'react-router';

export function checkCookie() {
    return (dispatch) => {
        const uid = window.localStorage.getItem('rr_uid') || '';
        const name = window.localStorage.getItem('rr_name') || '';
        const role = window.localStorage.getItem('rr_role') || '';
        if (uid !== '') {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {
                    uid: uid,
                    name: name,
                    role: role,
                    isAuthenticated: true,
                    drinks: [],
                    cocktails: [],
                    bars: []
                }
            })
        }
    }
}

export function fetchUserById(id) {
    return (dispatch, getState) => {
            firebase.database().ref('Users/' + id).once('value').then(function (snapshot) {
                var val = snapshot.val();
                dispatch({
                    type: FETCH_USER_BY_ID,
                    payload: {
                        name: val.nickname,
                        image: val.img
                    }
                })
            });

        }
}

export function fetchUser() {
    return (dispatch, getState) => {
        var user = firebase.auth().currentUser;
        if(user){
            firebase.database().ref('Users/' + user.uid).once('value').then(function (snapshot) {
                var img = snapshot.val().img;
                dispatch({
                    type: FETCH_USER,
                    payload: {
                        name: user.displayName,
                        id: user.uid,
                        email: user.email,
                        image: img
                    }
                })
            });

        }
    }
}

export function login(payload) {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
            .then(function () {
                var user = firebase.auth().currentUser;
                if(user.emailVerified)
                {
                    firebase.database().ref('Users/' + user.uid).once('value').then(function (snapshot) {
                        var role = snapshot.val().role
                        browserHistory.push('/');
                        window.localStorage.setItem('rr_name', user.displayName);
                        window.localStorage.setItem('rr_uid', user.uid);
                        window.localStorage.setItem('rr_role', role);
                        dispatch({
                            type: LOGIN_SUCCESS,
                            payload: {
                                uid: user.uid,
                                name: user.name,
                                role: role,
                                isAuthenticated: true,
                                drinks: [],
                                cocktails: [],
                                bars: []
                            }
                        })
                    });
                }
                else {
                    alert('Verificate email!');
                }
            })
            .catch(function(error) {
                if (error.code === 'auth/wrong-password') {
                    alert('Wrong password.');
                } else {
                    alert(error.message);
                }
        });
    }
}


export function logout() {
    return (dispatch) => {
        firebase.auth().signOut().then(function() {
            window.localStorage.setItem('rr_name', '');
            window.localStorage.setItem('rr_role', '');
            window.localStorage.setItem('rr_uid', '');
            browserHistory.push('/');
            dispatch({
                type: LOGOUT,
                payload: {
                    name: '',
                    isAuthenticated: false
                }
            })
        }).catch(function(error) {
            alert(error.message);
        });

    }
}

export function signup(payload) {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then(function(){
                var user = firebase.auth().currentUser;
                user.sendEmailVerification().then(function() {
                    alert('Email Verification Sent!');
                });
                user.updateProfile({
                    displayName: payload.name,
                }).then(function() {
                    firebase.storage().ref('UserPhotos/no_avatar.jpg').getDownloadURL()
                        .then(function (url) {
                        var database = firebase.database();
                        var newPost = database.ref('Users').child(user.uid);
                        newPost.set({
                            role: 'user',
                            nickname: payload.name,
                            img: url
                        });
                    })
                }).catch(function(error) {
                    // An error happened.
                });
                browserHistory.push('/');
                dispatch({
                    type: SIGNUP_SUCCESS,
                    payload: {
                        role: 'user',
                        isAuthenticated: false
                    }
                })
            })
            .catch(function(error) {
                if (error.code === 'auth/weak-password') {
                    alert('The password is too weak.');
                } else {
                    alert(error.message);
                }
            dispatch({
                type: SIGNUP_FAIL,
                payload: {}
            })
        });
    };
}