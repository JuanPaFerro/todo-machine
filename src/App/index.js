import { useState } from "react";
import AppUI from "./AppUI";
/* 
paleta de colores
.color1 {color: #06111d;}
.color2 {color: #1c374b;}
.color3 {color: #306683;}
.color4 {color: #42a1c5;}
.color5 {color: #55e7ff;}
*/

const defaultTodos = [
  { text: "Take a course with Platzi", completed: true },
  { text: "Set a meeting for tomorrow", completed: false },
  { text: "Do the shopping for the week", completed: false },
  { text: "Workout for 2-3 hours", completed: false },
];

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState("");

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

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex((t) => t.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  };
  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex((t) => t.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodos={completeTodos}
      deleteTodos={deleteTodos}
    />
  );
}

export default App;
