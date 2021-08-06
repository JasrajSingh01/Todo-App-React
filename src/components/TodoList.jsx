import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {

    const todoToBeAdded = {
      id: Math.random(),
      name: todo,
    }

    const newTodos = [todoToBeAdded, ...todos];
    setTodos(newTodos);
  };


  const removeTodo = (id) => {
    const removedArr = todos.filter(todo => todo.id !== id);
    setTodos(removedArr);
  };

  return (
    <div className="main">
      <h1>What's the plan for today?</h1>
      <TodoForm className="form" todoList={addTodo} />
      {todos.map((todo) => (
        <Todo key={Math.random() * 10000} id={Math.random()} todo={todo} removeTodo={removeTodo} />
      ))}
    </div>
  );
}

export default TodoList;
