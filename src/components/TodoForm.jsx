import React, { useState } from "react";

function TodoForm(props) {
  let [input, setInput] = useState("");

  // input handler for adding todo tasks
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  // for submiting forms
  const handleSubmit = (e) => {
    e.preventDefault();
    props.todoList(input);
    setInput('');
  };

  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input className="todo-input" value={input} type="text" placeholder="Add a Todo" name="text" onChange={inputHandler} />
        <button className="todo-btn">Add Todo</button>
      </form>
    </div>
  );
}

export default TodoForm;
