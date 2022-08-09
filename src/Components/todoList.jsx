import React, {useState, useEffect} from 'react'
import TodoForm from './todoForm'
import TodoItems from './todoItems'

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [edit, setEdit] = useState(null);
    const [search, setSearch] = useState("")
    const handleModifyTodos = (getLatestTodoItemDetails) => {
        const newTodos = [...todos];
        const indexofLatestTodoItem = newTodos.findIndex(item => item.id === getLatestTodoItemDetails.id);
        
        if (indexofLatestTodoItem === -1) {
            // item is not present in the array
            newTodos.push(getLatestTodoItemDetails)
            
        } else {
            // if the item is already present in the array we have to modify that index
            newTodos[indexofLatestTodoItem] =
            {
                ...newTodos[indexofLatestTodoItem],
                text: getLatestTodoItemDetails.text
            }
        }
        setTodos(newTodos);
        localStorage.setItem('todoList', JSON.stringify(newTodos))
    };

    const getEdit = (editedData) => {
        setEdit(editedData)
    }
    // console.log(todos);

    const handleDelete = (idToBeDeleted) => {
        let updatedTodos = [...todos];
        updatedTodos = updatedTodos.filter(item => item.id !== idToBeDeleted);
        setTodos(updatedTodos);
        localStorage.setItem('todoList', JSON.stringify(updatedTodos))
    }

    useEffect(() => {
        const extractTodos = JSON.parse(localStorage.getItem('todoList'))
        if (extractTodos && extractTodos.length) {
           setTodos(extractTodos) 
        }
    }, [])

    
    
    const handleOnSearch = (e) => {
        const { value } = e.target;
        setSearch(value.toLowerCase())
    }

    const filteredTodos = todos && todos.length ? todos.filter(item => item.text.toLowerCase().includes(search)) : []

    return (
        <div className = "todo-list">
            <div className = "search-todos-wrapper">
                <h3>Search todos</h3>
                <input
                    name="search"
                    className = "search-input"
                    type="text"
                    placeholder='Search todos here..'
                    value = {search}
                    onChange = {handleOnSearch}
                />
            </div>
            <TodoForm getNewlyCreatedTodoItem={handleModifyTodos}
                edit = {edit}
            />
            {
                filteredTodos && filteredTodos.length ? (
                    <TodoItems
                getEdit={getEdit}
                getDelete={handleDelete}
                todos={filteredTodos} />
                ): <p className = "no-todo">No Todos found</p>
            }
            
        </div>
    )
 
}

export default TodoList