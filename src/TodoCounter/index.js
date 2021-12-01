import "./TodoCounter.css";

function TodoCounter({ totalTodos, completedTodos } ) {
  return (
    <div className="TodoCounter">
      <p>Completed Tasks: {`${completedTodos} of ${totalTodos}`}</p>
    </div>
  );
}

export default TodoCounter;
