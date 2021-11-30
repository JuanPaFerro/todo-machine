import { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = useState("");
  const { addTodo, setOpenModal } = useContext(TodoContext);

  const handleTextChange = (e) => {
    setNewTodoValue(e.target.value);
  };
  const handleCancel = () => {
    setOpenModal(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodoValue !== "") {
      addTodo(newTodoValue);
    }
    setOpenModal(false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your new ToDo</label>
      <textarea
        cols="15"
        value={newTodoValue}
        onChange={handleTextChange}
        placeholder="Feed the Cat"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Add
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
