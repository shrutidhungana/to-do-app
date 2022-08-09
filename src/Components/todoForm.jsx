import React, {useState} from "react";

const TodoForm = (props) => {
    const {getNewlyCreatedTodoItem} = props;
    const [input, setInput] = useState("");
    const handleOnChange = (e) => {
        const { value } = e.target;
        setInput(value)
  };

  const handleSubmit = (e) => {
      e.preventDefault();
     
      const newCreatedToDo = {
          id: Math.floor(Math.random() * 1000),
          text: input
      };
      getNewlyCreatedTodoItem(newCreatedToDo);
      setInput("");
  };
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
        <button className="todo-button" type="submit">
          Add todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
