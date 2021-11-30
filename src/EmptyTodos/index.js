import IconComponent from "../IconComponent";
import "./EmptyTodos.css";

function EmptyTodos() {
  return (
    <div className="EmptyTodos">
      <h1><IconComponent type="search-off" /> Upsss!</h1>
      <h1>        
        We couldn't find any ToDo
      </h1>
      <h3>(try creating a new one)</h3>
    </div>
  );
}

export default EmptyTodos;
