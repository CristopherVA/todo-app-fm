import React from 'react'
import { useDispatch } from 'react-redux'
import { typeFilter } from '../../redux/actions/todoAction';



export const TodoInfo = () => {

    const dispatch = useDispatch();

    return (
        <>
            <div className='todo__info-container'>
                <div className="todo__button-contain">
                    <h3
                        style={{
                            cursor: 'pointer',
                            padding: '1rem 2rem',
                        }}
                        onClick={() => dispatch(typeFilter('all'))}
                    >All</h3>
                    <h3
                        style={{
                            cursor: 'pointer',
                            padding: '1rem 2rem',
                        }}
                        onClick={() => dispatch(typeFilter('active'))}
                    >Active</h3>
                    <h3
                        style={{
                            cursor: 'pointer',
                            padding: '1rem 2rem',
                        }}
                        onClick={() => dispatch(typeFilter('complete'))}
                    >Complete</h3>
                </div>
            </div>
        </>
    )
}
