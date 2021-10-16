import React, { useState } from 'react';



export const TodoItem = ({name}) => {
    const [check, setCheck] = useState(false);

    const handleChecked = () => {
        setCheck(!check)
    }



    return (
        <>
            
            <div 
                className="todo__desc-contein"
                onClick={handleChecked}
            >
                <input
                    type="checkbox"
                    checked={check}
                />

                <h2 className={ check ? 'todo__desc line-through' : 'todo__desc'}>{name}</h2>
            </div>

           
                
        </>
    )
}
