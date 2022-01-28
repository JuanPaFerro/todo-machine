import { CounterLoading, Counter } from "./styles";

function TodoCounter({ totalTodos, completedTodos, loading }) {
  return !!loading ? (
    <CounterLoading>
      <p>Completed ToDo's: {`${completedTodos} of ${totalTodos}`}</p>
    </CounterLoading>
  ) : (
    <Counter>
      <p>Completed ToDo's: {`${completedTodos} of ${totalTodos}`}</p>
    </Counter>
  );
}

export default TodoCounter;
