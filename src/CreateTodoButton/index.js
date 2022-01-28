import { Button } from "./styles";

function CreateTodoButton({ setOpenModal }) {
  const handleCreateTodo = () => {
    setOpenModal((prevState) => !prevState);
  };
  return <Button onClick={handleCreateTodo}>Create ToDo</Button>;
}

export default CreateTodoButton;
