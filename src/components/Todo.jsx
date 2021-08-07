import React from "react";

// using props in the function for getting the task name and removeTodo function getting from TodoList
function Todo(props) {

  return (
    <div className="task">
      <p>{props.task.name}</p> {/* displaying the name from the todo object recieved from props */}
      <button
          onClick={() => props.removeTodo(props.task.id)}
          className='delete-btn'
        >
          Delete
        </button>
    </div>
  );
}

export default Todo;
