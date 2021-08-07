import React, { useState } from "react";

function TodoForm(props) {
  // react state for storing the task value
  let [input, setInput] = useState("");

  // input handler for adding todo tasks
  const inputHandler = (e) => {
    setInput(e.target.value); // updating the react state from the form below 
  };

  // for submiting forms
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent using the default function of onSubmit event which will refresh the page after form is submitted
    props.todos(input); // using the function we got from the react props from TodoList component. 
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
