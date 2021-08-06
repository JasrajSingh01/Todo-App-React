import React from "react";

function Todo(props) {

  return (
    <div className="task">
      <p>{props.todo.name}</p>
      <button
          onClick={() => props.removeTodo(props.todo.id)}
          className='delete-btn'
        >
          Delete
        </button>
    </div>
  );
}

export default Todo;
