import React from "react";
import TodoCounter from "./Components/TodoCounter";
import TodoSearch from "./Components/TodoSearch";
import TodoItem from "./Components/TodoItem";
import TodoList from "./Components/TodoList";
import CreateTodoButton from "./Components/CreateTodoButton";

const todos = [
  { text: "Task 1", completed: false },
  { text: "Task 2", completed: false },
  { text: "Task 3", completed: false },
  { text: "Task 4", completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
