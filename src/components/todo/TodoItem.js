import React, { useState } from 'react';
import IconX from '../../images/icon-cross.svg';

export const TodoItem = () => {

    const [check, setCheck] = useState(false);

    const handleChecked = () => {
        setCheck(!check)
    }

    return (
        <>
            <div 
                className="todo__item"
                
            >
                <div 
                    className="todo__desc-contein"
                    onClick={handleChecked}
                >
                    <input
                        type="checkbox"
                        checked={check}
                    />

                    <h2 className={ check ? 'todo__desc line-through' : 'todo__desc'}>Arreglar la nevera</h2>
                </div>

                <img src={IconX} alt="icon-cross" />
            </div>
        </>
    )
}
