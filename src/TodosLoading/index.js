import React from "react";
import IconComponent from "../IconComponent";
import "./TodosLoading.css";
function TodosLoading() {
  return (
    <React.Fragment>
      <div className="LoadingTodo-container">
        <span className="LoadingTodo-completeIcon">
          <IconComponent type="check" />
        </span>
        <p className="LoadingTodo-text">Loading ToDos...</p>
        <span className="LoadingTodo-deleteIcon">
          <IconComponent type="delete" />
        </span>
      </div>
    </React.Fragment>
  );
}

export default TodosLoading;
