import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
    return (
        <div className='auth__login-container'>
            <div className="login__content">
                <h1 className='login__title'>Todo Register</h1>
                <form>
                    <input
                        className='auth__input'
                        type="text"
                        placeholder='Introduzca su Nombre'
                    />

                    <input
                        className='auth__input'
                        type="text"
                        placeholder='Introduzca su Email'
                    />

                    <input
                        className='auth__input'
                        type="text"
                        placeholder='Introduzca su Password'
                    />

                    <input
                        className='auth__input'
                        type="password"
                        placeholder='Confirme su Password'
                    />
                </form>
                <button
                    type='submit'
                    className='btn-primary'
                >Login</button>

            </div>
            <Link to="/auth/login" className="btn-link">Sign in</Link>
        </div>
    )
}
