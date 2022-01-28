import { useState } from "react";
import {
  Form,
  Label,
  TextArea,
  ButtonContainer,
  ButtonAdd,
  ButtonCancel,
} from "./styles";

function TodoForm({ addTodo, setOpenModal }) {
  const [newTodoValue, setNewTodoValue] = useState("");

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
    <Form onSubmit={handleSubmit}>
      <Label>Enter your new ToDo</Label>
      <TextArea
        cols="15"
        value={newTodoValue}
        onChange={handleTextChange}
        placeholder="Feed the Cat"
      />
      <ButtonContainer>
        <ButtonCancel type="button" onClick={handleCancel}>
          Cancel
        </ButtonCancel>
        <ButtonAdd type="submit">Add</ButtonAdd>
      </ButtonContainer>
    </Form>
  );
}

export default TodoForm;
