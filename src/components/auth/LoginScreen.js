import React from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import validator from 'validator';
import { useForm } from '../../hooks/useForm';

import { loginWithEmailAndPassoword, loginWithFacebook, loginWithGoogle } from '../../actions/authAction';
import { setError, removeError } from '../../actions/uiAction';

export const LoginScreen = () => {

    const dispatch = useDispatch();    

    const { value, handleInputChange } = useForm({
        email: '',
        password: ''
    })

    const { email, password } = value;


    const handleLoginGoogle = () => {
        dispatch(loginWithGoogle())
    }

    const handleLoginFacebook = () => {
        dispatch(loginWithFacebook())
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email,password)
        if(isFormValid){
            dispatch(loginWithEmailAndPassoword(email, password))
        }

    }

    const isFormValid = () => {
        if(!validator.isEmail(email)){
            dispatch(setError('Email is required'))
            return false;
        } else if (password.trim().lenght <= 5){
            dispatch(setError('The password should be major 5 character'))
            return false;
        } 

        dispatch(removeError())

        return true
    }

    return (
        <div className='auth__login-container'>
            <div className="login__content">
                <h1 className='login__title'>Login</h1>
                <form onSubmit={handleSubmit} >
                    <input
                        className='auth__input'
                        type="text"
                        placeholder='Introduzca su Email'
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                    />

                    <input
                        className='auth__input'
                        type="password"
                        placeholder='Introduzca su Password'
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                    />
                <button
                    type='submit'
                    className='btn-primary'
                >Login</button>
                </form>

                <hr />

                <div className="login__social">
                    <h2>Login with Social</h2>
                    <div className="icons__social">
                        <FaIcons.FaGoogle className='icon__google' onClick={handleLoginGoogle} />
                        <FaIcons.FaFacebook className='icon__facebook' onClick={handleLoginFacebook} />
                    </div>
                </div>
        
            </div>
            <Link to="/auth/register" className="btn-link">Create Account</Link>
        </div>
    )
}
