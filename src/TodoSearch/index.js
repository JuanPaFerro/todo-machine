import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";
function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <input
      className="todo_search"
      placeholder="Task Name"
      value={searchValue}
      onChange={handleSearch}
    />
  );
}

export default TodoSearch;
