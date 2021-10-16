import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { TodoInfo } from './TodoInfo';
import { TodoItem } from './TodoItem';

import IconX from '../../images/icon-cross.svg';
import { removeTodo } from '../../actions/todoAction';

export const TodoItems = () => {

  const dispatch = useDispatch();

  const { todos } = useSelector(state => state.todo);

  const { width } = useWindowDimensions();
  
  return (
    <>
      <div className='todo__items'>
        <ul className="todo__items-contain">
          { 
            todos.map( (todo) => (
              <li key={todo.id} className="todo__item">
                  <TodoItem {...todo} /> 
                  <img onClick={ () => dispatch(removeTodo(todo.id)) } src={IconX} alt="icon-cross" />
              </li>
            ))
          }
        </ul>
        <div className="todo__info">
          <h3>{ todos.length } item</h3>
          {
            width < 425 ? <TodoInfo /> : null
          }
          <h3>Clear Completed</h3>
        </div>
      </div>
      {
        width > 425 ? <TodoInfo /> : null
      }
      <h2 className='todo__botton-info'>Drag and drop to reorde list</h2>
    </>
  )
}
