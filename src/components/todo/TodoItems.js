import React from 'react'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import { TodoInfo } from './TodoInfo'
import { TodoItem } from './TodoItem'

export const TodoItems = () => {

  const { width } = useWindowDimensions();

  return (
    <>
      <div className='todo__items'>
        <div className="todo__items-contain">
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </div>
        <div className="todo__info">
          <h3>5 item</h3>
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
