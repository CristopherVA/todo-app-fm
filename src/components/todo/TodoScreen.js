import React from 'react';
import iconSun from '../../images/icon-sun.svg';
import { TodoItems } from './TodoItems';

export const TodoScreen = () => {
    return (
        <>
            <div className='todo__container'>
                <div className="todo__contain">
                    <div className="max-width">
                        <div className="todo__nav">
                            <h1>TODO</h1>
                            <img src={iconSun} alt="icon-sun" />
                        </div>
                        <input
                            type="text"
                            placeholder='Create a new Todo...'
                            className='todo__input'
                        />
                    </div>

                </div>
                <div className="max-width">
                    <TodoItems />
                </div>

            </div>
        </>
    )
}