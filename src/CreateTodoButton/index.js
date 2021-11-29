import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./CreateTodoButton.css";

function CreateTodoButton() {
  const { setOpenModal } = useContext(TodoContext);
  const handleCreateTodo = () => {
    setOpenModal((prevState) => !prevState);
  };
  return (
    <button className="CreateTodoButton" onClick={handleCreateTodo}>
      Create ToDo
    </button>
  );
}

export default CreateTodoButton;
