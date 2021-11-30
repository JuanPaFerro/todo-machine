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
      placeholder="Search ToDos..."
      value={searchValue}
      onChange={handleSearch}
    />
  );
}

export default TodoSearch;
