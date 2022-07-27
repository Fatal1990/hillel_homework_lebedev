import React from "react";

function TodoItem({ todo, deleteBtn, statusChange }) {
  const { id, title, completed } = todo;

  const status = (completed) => {
    return completed ? "list-item done" : "list-item undone";
  };

  return (
    <li className={status(completed)} onClick={() => statusChange(id)}>
      {title}
      <button
        className="delete-btn"
        onClick={(e) => {
          e.stopPropagation();
          deleteBtn(id);
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
