import React from "react";
import "./CSS/TodoCounter.css";

function TodoCounter({ total, completed }) {
  return (
    <div className="TodoCounter">
      <h2>Completed Tasks:</h2>
      <p>{`${completed} of ${total}`}</p>
    </div>
  );
}

export default TodoCounter;
