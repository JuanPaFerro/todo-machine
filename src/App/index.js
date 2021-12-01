import React from "react";
import { useTodos } from "./useTodos";
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

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodos,
    deleteTodos,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos();
  return (
    <React.Fragment>
      <WelcomeComponent />
      <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

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
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export default App;
