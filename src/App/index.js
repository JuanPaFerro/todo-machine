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
import ChangeAlert from "../ChangeAlert";
import "./App.css";

function App() {
  const { states, stateUpdaters } = useTodos();
  const {
    error,
    loading,
    totalTodos,
    completedTodos,
    searchValue,
    searchedTodos,
    openModal,
  } = states;
  const {
    completeTodos,
    deleteTodos,
    setSearchValue,
    addTodo,
    setOpenModal,
    synchronizeTodos,
  } = stateUpdaters;

  return (
    <div className="App-container">
      <WelcomeComponent />
      <TodoCounter
        totalTodos={totalTodos}
        completedTodos={completedTodos}
        loading={loading}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        loading={loading}
      />

      <TodoList
        totalTodos={totalTodos}
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos type="empty-list" />}
        onEmptySearchResults={() => (
          <EmptyTodos type="empty-search" searchValue={searchValue} />
        )}
      >
        {(todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.id)}
            onDelete={() => deleteTodos(todo.id)}
          />
        )}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />

      <ChangeAlert synchronizeTodos={synchronizeTodos} />
    </div>
  );
}

export default App;
