import "./TodoSearch.css";
function TodoSearch({ searchValue, setSearchValue, loading }) {
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <input
      className="todo_search"
      placeholder="Search ToDos..."
      value={searchValue}
      onChange={handleSearch}
      disabled={loading}
    />
  );
}

export default TodoSearch;
