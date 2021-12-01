import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const completedTodos = todos.filter((x) => !!x.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      if (todo.text.toLowerCase().includes(searchValue.toLowerCase())) {
        return todo;
      }
    });
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      id: "_" + Math.random().toString(36).substr(2, 9),
      text: text,
      completed: false,
    });
    console.log(newTodos);
    saveTodos(newTodos);
  };

  const completeTodos = (id) => {
    const todoIndex = todos.findIndex((t) => t.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };
  const deleteTodos = (id) => {
    const todoIndex = todos.findIndex((t) => t.id === id);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return {
    error,
    loading,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    addTodo,
    completeTodos,
    deleteTodos,
    openModal,
    setOpenModal,
  };
}

export { useTodos };
