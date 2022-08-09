import React, {useState} from 'react'
import TodoForm from './todoForm'
import TodoItem from './todoItems'

const TodoList = () => {
    const [todos,setTodos] = useState([])
    const handleModifyTodos = (getLatestTodoItemDetails) => {
        const newTodos = [...todos]
        const indexofLatestTodoItem = newTodos.findIndex(item => item.id === getLatestTodoItemDetails.id);
        if (indexofLatestTodoItem === -1) {
            // item is not present in the array
            newTodos.push(getLatestTodoItemDetails)
        } else {
            // if the item is already present in the array we have to modify that index
            
        }
        setTodos(newTodos)
    }
    return (
        <div>
            <TodoForm getNewlyCreatedTodoItem={handleModifyTodos }/>
        </div>
    )
 
}

export default TodoList