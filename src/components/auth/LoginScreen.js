import React from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

export const LoginScreen = () => {

    let history = useHistory()

    const handleClick = () => {
        history.push("/")
    }

    return (
        <div className='auth__login-container'>
            <div className="login__content">
                <h1 className='login__title'>Todo Login</h1>

                <form>
                    <input
                        className='auth__input'
                        type="text"
                        placeholder='Introduzca su Email'
                    />

                    <input
                        className='auth__input'
                        type="password"
                        placeholder='Introduzca su Password'
                    />
                </form>
                <button
                    type='submit'
                    className='btn-primary'
                    onClick={ handleClick }
                >Login</button>

                <hr />

                <div className="login__social">
                    <h2>Login with Social</h2>
                    <div className="icons__social">
                        <FaIcons.FaGoogle className='icon__google'/>
                        <FaIcons.FaFacebook className='icon__facebook'/>
                        <FaIcons.FaTwitter className='icon__twitter'/>
                    </div>
                </div>
            

            </div>
            <Link to="/auth/register" className="btn-link">Create Account</Link>
        </div>
    )
}
