import React from "react";
import TodoCard from "../ToDoCard/ToDoCard";
import styles from "./TodoList.module.css";

function TodoList({ todos, onDelete }) {
  if (todos.length === 0) {
    return <p className={styles.empty}>No todos yet 🙃</p>;
  }

  return (
    <div className={styles.list}>
      {todos.map((t) => (
        <TodoCard key={t.id} todo={t} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default TodoList;