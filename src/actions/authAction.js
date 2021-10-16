import { firebase, googleProvider, facebookProvider } from "../firebase/firebase-config";
import { types } from "../types/types";

export const loginWithEmailAndPassoword = (email, password) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(( { user } ) => {
                console.log(user);
            } )
            .catch(e => {
                console.log(e);
            })
    }
}

export const registeWithEmailAndPassword = (email, password, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password, name)
            .then(async ({user}) => {
                await user.updateProfile({ displayName: name })
                dispatch(login( user.uid, user.displayName ))
            })
            .catch(e => {
                console.log(e);
            })
    }
}

export const loginWithGoogle = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleProvider)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName))
            })
            .catch(e => {
                console.log(e)
            })
    }
}

export const loginWithFacebook = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(facebookProvider)
            .then(({user}) => {
                dispatch(login(user.uid, user.displayName))
            })
            .catch (e => {
                console.log(e)
            })
    }
}

const login = (uid, displayName) => ({
    type: types.authLogin,
    payload: {
        uid,
        displayName
    }
})