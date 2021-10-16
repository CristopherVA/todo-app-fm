import React from 'react';
import { useHistory } from 'react-router';
import { useForm } from '../../hooks/useForm';
import iconSun from '../../images/icon-sun.svg';
import { TodoItems } from './TodoItems';

import { addNewTodo } from '../../actions/todoAction';

import { useDispatch } from 'react-redux';

export const TodoScreen = () => {

    const { value, handleInputChange, handleReset } = useForm({
        todo: ''
    })

    const dispatch = useDispatch();

    const { todo } = value;

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addNewTodo(todo))
        handleReset()
    }

    const history = useHistory()

    const logout = () => {
        return history.push('/auth/login')
    }

    return (
        <>
            <div className='todo__container'>
                <div className="todo__contain">
                    <div className="max-width">
                        <div className="todo__nav">
                            <h1>TODO</h1>
                            <img src={iconSun} alt="icon-sun" />
                        </div>
                        <form onSubmit={handleSubmit} className='form__todo'>
                            <input
                                type="text"
                                name="todo"
                                placeholder='Create a new Todo...'
                                className='todo__input'
                                value={todo}
                                onChange={handleInputChange}
                            />
                            <button type='submit' className='btn-todo'>Add</button>
                        </form>
                    </div>

                </div>
                <div className="max-width">
                    <TodoItems />
                </div>
                 <button onClick={logout} className="btn-logout">Salir</button>
            </div>
        </>
    )
}