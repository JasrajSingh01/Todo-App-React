import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
// import { v4 as uuidv4 } from 'uuid';


function TodoList() {
  // react state in which tasks will be stored
  const [todos, setTodos] = useState([]);

  // for adding new tasks in the react react state
  const addTodo = (taskName) => {
    //object which will be stored in react state
    const todoToBeAdded = {
      id: Math.random(),
      name: taskName,
    }

    const newTodos = [todoToBeAdded, ...todos]; // adding new todo in the array with old ones in temporary array
    setTodos(newTodos);  //updating the state
  };

  // for removing value in the state
  const removeTodo = (id) => {
    const newArray = todos.filter(todo => todo.id !== id); // removing the task from react state using JS filter function
    setTodos(newArray); // updating the react state with the array above
  };

  return (
    <div className="main">
      <h1>What's the plan for today?</h1>
      <TodoForm className="form" todos={addTodo} />
      {todos.map((todo) => (  // displaying tasks by using JS Map function
        <Todo key={todo.id} task={todo} removeTodo={removeTodo} /> // passing react state data in the component
      ))}
    </div>
  );
}

export default TodoList;
