import React  from 'react';
import { useForm } from '../../hooks/useForm';
import iconSun from '../../images/icon-sun.svg';
import { TodoItems } from './TodoItems';
import { startLogout } from '../../redux/actions/authAction';
import { useDispatch } from 'react-redux';
import { startAddNewTodo } from '../../redux/actions/todoAction';

export const TodoScreen = () => {

    const { value, handleInputChange, handleReset } = useForm({
        title: ''
    })

    const dispatch = useDispatch();

    const { title } = value;

   

    const handleSubmit = e => {
        e.preventDefault();
        if(title === "") return 
        dispatch(startAddNewTodo(title))
        handleReset()
    }

    const logout = () => {
        dispatch(startLogout())
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
                                name="title"
                                placeholder='Create a new Todo...'
                                className='todo__input'
                                value={title}
                                onChange={handleInputChange}
                            />
                            <button 
                                type='submit' 
                                className='btn-todo' 
                                
                            >Add</button>
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