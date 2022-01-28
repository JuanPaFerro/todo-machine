import React from "react";
import IconComponent from "../IconComponent";
import { EmptyTodosContainer } from "./styles";

function EmptyTodos({ type, searchValue }) {
  
  return (
    <EmptyTodosContainer>
      {(type === "empty-search" && (
        <>
          <h1>
            <IconComponent type="search-off" /> Upsss!
          </h1>
          <h1>We couldn't find any ToDo for :</h1>
          <p>"{searchValue}"</p>
        </>
      )) || (
        <>
          <h1>No ToDo's to show</h1>
          <h3>
            <IconComponent type="new-icon" /> Try creating your first ToDo
          </h3>
        </>
      )}
    </EmptyTodosContainer>
  );
}

export default EmptyTodos;
