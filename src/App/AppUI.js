import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import TodoCounter from "../TodoCounter/";
import TodoSearch from "../TodoSearch/";
import TodoList from "../TodoList/";
import TodoItem from "../TodoItem/";
import CreateTodoButton from "../CreateTodoButton/";
import Modal from "../Modal";
import TodoForm from "../TodoForm";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodos,
    deleteTodos,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>{error}</p>}
        {loading && <p>Loading</p>}
        {!loading && !searchedTodos.length && <p>Create the first TODO</p>}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => deleteTodos(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export default AppUI;
