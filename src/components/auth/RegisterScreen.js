import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { registeWithEmailAndPassword } from '../../actions/authAction';
import { removeError, setError } from '../../actions/uiAction';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {

    const { value, handleInputChange, handleReset } = useForm({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { name, email, password, password2} = value;

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email,password)
        if(isFormValid){
            dispatch(registeWithEmailAndPassword(email, password))
            handleReset()
        }
    }

    const isFormValid = () => {
        if(validator.isEmpty(name)){
            dispatch(setError('Name is required'))
            return false
        }
        else if(!validator.isEmail(email)){
            dispatch(setError('Email is required'))
            return false;
        } else if (password.trim() !== password2.trim()){
            dispatch(setError('The password should be same!'))
            return false;
        } 

        dispatch(removeError())

        return true
    }

    return (
        <div className='auth__login-container'>
            <div className="login__content">
                <h1 className='login__title'>Register</h1>
                <form onSubmit={handleSubmit} >
                    <input
                        className='auth__input'
                        type="text"
                        placeholder='Introduzca su Nombre'
                        name="name"
                        value={name}
                        onChange={handleInputChange}
                    />

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

                    <input
                        className='auth__input'
                        type="password"
                        placeholder='Confirme su Password'
                        name="password2"
                        value={password2}
                        onChange={handleInputChange}
                    />
                <button
                    type='submit'
                    className='btn-primary'
                >Register</button>
                </form>
            </div>
            <Link to="/auth/login" className="btn-link">Sign in</Link>
        </div>
    )
}
