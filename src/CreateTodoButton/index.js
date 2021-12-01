import "./CreateTodoButton.css";

function CreateTodoButton({ setOpenModal }) {
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
