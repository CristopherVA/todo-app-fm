import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { TodoInfo } from './TodoInfo';
import { TodoItem } from './TodoItem';
import IconX from '../../images/icon-cross.svg';
import { startDeleteTodo } from '../../redux/actions/todoAction';

export const TodoItems = () => {

  const dispatch = useDispatch();

  const { todos, typeTodos } = useSelector(state => state.todo);

  const { width } = useWindowDimensions();

  const filterTypes = () => {
    switch (typeTodos) {
      case "all":
        return todos.filter(f => f)
      case "complete":
        return todos.filter(f => f.status === true)
      case "active":
        return todos.filter(f => f.status === false)
      default:
        return todos.filter(f => f)
    }
  }


  return (
    <>
      <div className='todo__items'>
        <ul className="todo__items-contain">
          {
            filterTypes().map((todo) => (
              <li key={todo.id} className="todo__item">
                <TodoItem id={todo.id} title={todo.title} status={todo.status} />
                <img onClick={() => dispatch(startDeleteTodo(todo.id))} src={IconX} alt="icon-cross" />
              </li>
            ))
          }


        </ul>
        <div className="todo__info">
          <h3>{todos.length} item</h3>
          {
            width < 425 ? <TodoInfo /> : null
          }
          <h3 

            style={{ cursor: 'pointer' }}
          >Clear Completed</h3>
        </div>
      </div>
      {
        width > 425 ? <TodoInfo /> : null
      }
      <h2 className='todo__botton-info'>Drag and drop to reorde list</h2>
    </>
  )
}
