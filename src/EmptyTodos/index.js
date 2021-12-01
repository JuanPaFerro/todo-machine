import React from "react";
import IconComponent from "../IconComponent";
import "./EmptyTodos.css";

function EmptyTodos({ type, searchValue }) {
  let rend;
  if (type === "empty-search") {
    rend = (
      <React.Fragment>
        <h1>
          <IconComponent type="search-off" /> Upsss!
        </h1>
        <h1>We couldn't find any ToDo for :</h1>
        <p>"{searchValue}"</p>
      </React.Fragment>
    );
  } else {
    rend = (
      <React.Fragment>
        <h1>No ToDo's to show</h1>
        <h3>
          <IconComponent type="new-icon" /> Try creating your first ToDo
        </h3>
      </React.Fragment>
    );
  }
  return <div className="EmptyTodos">{rend}</div>;
}

export default EmptyTodos;
