import React from 'react';
import { useDispatch } from 'react-redux';
import { startActiveTodo, startDesactiveTodo } from '../../redux/actions/todoAction';


export const TodoItem = ({title, status, id}) => {
    
    const dispatch = useDispatch()

    const handleChecked = (e) => {

        e.preventDefault()
        
        switch (status) {
            case true:
                dispatch(startDesactiveTodo(id))
                break;
            case false: 
                dispatch(startActiveTodo(id))
                break;
            default:
                break;
        } 
    }

    return (
        <>
            <div 
                className="todo__desc-contein"
                onClick={handleChecked}
            >
                <input
                    type="checkbox"
                    checked={status}
                />

                <h2 className={ status ? 'todo__desc line-through' : 'todo__desc'}>{title}</h2>
            </div>

           
                
        </>
    )
}
