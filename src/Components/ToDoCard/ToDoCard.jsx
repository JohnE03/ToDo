import React from "react";
import Button from "../Button/Button";
import styles from "./TodoCard.module.css";

function TodoCard({ todo, onDelete }) {
  return (
    <div className={styles.card}>
      <span>{todo.text}</span>
      <Button onClick={() => onDelete(todo.id)}>Delete</Button>
    </div>
  );
}

export default TodoCard;
