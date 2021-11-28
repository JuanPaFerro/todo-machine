import "./CSS/TodoSearch.css";
function TodoSearch({ searchValue, setSearchValue }) {
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
