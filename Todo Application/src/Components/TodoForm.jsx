import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();
    if (value) {
      // add todo
      addTodo(value);
      // clear form after submission
      setValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Add task here..."
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
}
export default TodoForm;
