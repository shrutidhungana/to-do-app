import React, {useState, useEffect} from "react";

const TodoForm = (props) => {
    const { getNewlyCreatedTodoItem, edit } = props;
    
    const [isEdit, setIsEdit] = useState(false)
    const [input, setInput] = useState("");
    const handleOnChange = (e) => {
        const { value } = e.target;
        setInput(value)
  };

  const handleSubmit = (e) => {
      e.preventDefault();
     
      const newCreatedToDo = {
          id: isEdit ?edit.id : Math.floor(Math.random() * 1000),
          text:  input
      };
      getNewlyCreatedTodoItem(newCreatedToDo);
      setInput("");
      setIsEdit(false)
      
  };
    useEffect(() => {
        if (edit && Object.keys(edit).length !== 0) {
            setInput(edit.text)
            setIsEdit(true)
        } 
    }, [edit]);

  return (
      <div>
          
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          name="input"
          className="todo-input"
          type="text"
          placeholder="Enter your todos here "
          onChange={handleOnChange}
        />
        <button className="todo-button" type="submit" >
          {isEdit?"Edit Todo":"Add Todo"}
        </button>
              </form>
              </div>
    
  );
};

export default TodoForm;
