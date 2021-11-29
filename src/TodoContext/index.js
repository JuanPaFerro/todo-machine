import { createContext, useState } from "react";
import useLocalStorage from "./useLocalStorage";

const TodoContext = createContext();

function TodoProvider(props) {
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
    newTodos.push({ text: text, completed: false });
    saveTodos(newTodos);
  };

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex((t) => t.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };
  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex((t) => t.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
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
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
