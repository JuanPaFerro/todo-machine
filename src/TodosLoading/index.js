import React from "react";
import { Container, IconDelete, IconComplete, Text } from "./styles";

function TodosLoading() {
  return (
    <React.Fragment>
      <Container>
        <IconComplete />
        <Text className="LoadingTodo-text">Loading ToDos...</Text>
        <IconDelete />
      </Container>
    </React.Fragment>
  );
}

export default TodosLoading;
