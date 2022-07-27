import React from "react";
import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
const axios = require("axios").default;

function TodoList() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://62d7ce4f9c8b5185c77c706f.mockapi.io/Todo")
      .then(({ data }) => setTodos(data));
  }, []);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const addTodoBtn = (e) => {
    e.preventDefault();
    const newTodo = {
      title,
      completed: false,
    };
    axios
      .post("https://62d7ce4f9c8b5185c77c706f.mockapi.io/Todo", newTodo)
      .then(({ data }) => setTodos((prevTodos) => [...prevTodos, data]));
  };

  const statusChange = (id) => {
    const todoThis = todos.find((todo) => todo.id === id);
    const newTodo = { ...todoThis, completed: !todoThis.completed };
    axios.put(
      "https://62d7ce4f9c8b5185c77c706f.mockapi.io/Todo" + "/" + id,
      newTodo
    );
    setTodos(todos.map((todoThis) => (todoThis.id === id ? newTodo : todoThis)));
  };

  const deleteBtn = (id) => {
    axios.delete("https://62d7ce4f9c8b5185c77c706f.mockapi.io/Todo" + "/" + id);
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  };

  return (
    <>
      <form className="form">
        <input
          type="text"
          value={title}
          onChange={handleChange}
          placeholder="Enter your ToDo"
        />
        <button onClick={addTodoBtn}>Add ToDo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteBtn={deleteBtn}
            statusChange={statusChange}
          />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
