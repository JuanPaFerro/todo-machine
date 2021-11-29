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


function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
