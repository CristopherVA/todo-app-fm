import { signInWithPopup, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { types } from "../types/types";
import { auth, providerFacebook, providerGoogle } from "../../firebase/firebase-config";

export const loginWithGoogle = () => {
    return (dispatch) => {
        try{
             signInWithPopup(auth, providerGoogle)
                .then(( {user} ) => {   
                    dispatch(login(user))
                    Swal.fire('Success', `Bienvenido ${user.displayName}`, 'success')
                })
                .catch(err => {
                    Swal.fire('Error', err, 'success')
                    throw err
                })
        } catch(error){
            Swal.fire('Error', error.message, 'error')
        }
    }
}

export const loginWithFacebook = () => {
    return (dispatch) => {
        try{
             signInWithPopup(auth, providerFacebook)
                .then(( {user} ) => {
                    
                    dispatch(login(user))
                    Swal.fire('Success', `Bienvenido ${user.displayName}`, 'success')
                })
                .catch(err => {
                    Swal.fire('Error', err, 'success')
                    throw err
                })
        } catch(error){
            Swal.fire('Error', error.message, 'error')
        }
    }
}

export const startLoginWithEmailAndPassword = (email, password) => {
    return (dispatch) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(login(user))
                Swal.fire('Success', `Bienvenido ${user.displayName}`, 'success')

            })
            .catch(err => {
                Swal.fire('Error', 'Comuniquese con el administrador!', 'error')
                throw err
                
            })

    }
}

export const startRegisterWithEmailAndPassword = (name, email, password) => {
    return (dispatch) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async({ user }) => {
                await updateProfile(user, { displayName: name })
                dispatch(login(user))
                Swal.fire('Success', `Bienvenido ${user.displayName}`, 'success')

            })
            .catch(err => {
                Swal.fire('Error', 'Comuniquese con el administrador!', 'error')
                throw err
            })
    }
}

export const startLogout = () => {
    return (dispatch) => {
        try{
             signOut(auth)
                .then(() => {
                    dispatch(logout())
                    Swal.fire('Success', 'Has cerrado seccion correctamente', 'success')
                    
                })
        } catch(err){
            Swal.fire('Error', err.message, 'error')
        }
    }
}

export const login = (user) => ({
    type: types.authLogin,
    payload: user
})

const logout = () => ({
    type: types.authLogout
})
