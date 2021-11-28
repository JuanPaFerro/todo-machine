import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const handleCreateTodo = (msg)=>{
    alert(msg)
  }
  return (
    <button className="CreateTodoButton" onClick={()=> handleCreateTodo("Modal")}>Create ToDo</button>
  );
}

export default CreateTodoButton ;