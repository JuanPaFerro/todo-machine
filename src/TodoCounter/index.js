import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
  const { totalTodos, completedTodos } = useContext(TodoContext);
  return (
    <div className="TodoCounter">
      <p>Completed Tasks: {`${completedTodos} of ${totalTodos}`}</p>
    </div>
  );
}

export default TodoCounter;
