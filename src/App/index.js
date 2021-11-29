import AppUI from "./AppUI";
import { TodoProvider } from "../TodoContext";
/* 
paleta de colores
.color1 {color: #06111d;}
.color2 {color: #1c374b;}
.color3 {color: #306683;}
.color4 {color: #42a1c5;}
.color5 {color: #55e7ff;}
*/

/*
const defaultTodos = [
  { text: "Take a course with Platzi", completed: true },
  { text: "Set a meeting for tomorrow", completed: false },
  { text: "Do the shopping for the week", completed: false },
  { text: "Workout for 2-3 hours", completed: false },
];
*/

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
