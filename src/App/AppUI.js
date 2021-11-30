import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import WelcomeComponent from "../WelcomeComponent";
import TodoCounter from "../TodoCounter/";
import TodoSearch from "../TodoSearch/";
import TodoList from "../TodoList/";
import TodoItem from "../TodoItem/";
import CreateTodoButton from "../CreateTodoButton/";
import Modal from "../Modal";
import TodoForm from "../TodoForm";
import EmptyTodos from "../EmptyTodos";
import TodosError from "../TodosError";
import TodosLoading from "../TodosLoading";

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
      <WelcomeComponent />
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <TodosError />}
        {loading &&
          Array(5)
            .fill(1)
            .map((a, i) => <TodosLoading key={i} />)}
        {!loading && !searchedTodos.length && <EmptyTodos />}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.id)}
            onDelete={() => deleteTodos(todo.id)}
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
