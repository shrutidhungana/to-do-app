import React from 'react'
import {RiCloseCircleLine } from 'react-icons/ri'
 import {TiEdit} from 'react-icons/ti'
const todoIcons = (props) => {
  const { todos,getEdit } = props;
  return (
    todos.map((todoItem, index) => (
      <div key={ `${todoItem.id}${index}`}className = "todo-item-wrapper">
        <p className="todo-text">{todoItem.text}</p>
        <div className = "icons">
          <RiCloseCircleLine className='delete' />
          <TiEdit
            className='edit'
            onClick={() => getEdit({ id: todoItem.id, text: todoItem.text })}
          />
        </div>
      </div>  
    ))
      
  )
}

export default todoIcons