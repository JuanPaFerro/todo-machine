import "./TodoCounter.css";

function TodoCounter({ totalTodos, completedTodos, loading }) {
  return (
    <div className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>
      <p>Completed ToDo's: {`${completedTodos} of ${totalTodos}`}</p>
    </div>
  );
}

export default TodoCounter;
