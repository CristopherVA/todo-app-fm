import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import validator from 'validator';
import { useForm } from '../../hooks/useForm';
import { startRegisterWithEmailAndPassword } from '../../redux/actions/authAction';

export const RegisterScreen = () => {

    const { value, handleInputChange, handleReset } = useForm({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { name, email, password, password2 } = value;

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(isFormValid()){
            dispatch(startRegisterWithEmailAndPassword(name, email, password))  
            handleReset()
        }
    }

    const isFormValid = () => {
        if(validator.isEmpty(name)){
            Swal.fire('Error', 'El nombre es requerido!', 'error')
            return false
        }
        if(!validator.isEmail(email)){
            Swal.fire('Error', 'El email es requerido!', 'error')
            return false;
        } 
        
        if(validator.isEmpty(password)) {
            Swal.fire('Error', 'Tienes que llenar los campo de la contraseña!', 'error')
            return false;
        }

        if (password !== password2){
            Swal.fire('Error', 'Las contraseñas tiene que tener los mismos valores!', 'error')
            return false;
        } 

        if (password.length < 6){
            Swal.fire('Error', 'Las contraseñas tiene que tener 6 o mas caracteres!', 'error')
            return false;
        } 

        
        
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
