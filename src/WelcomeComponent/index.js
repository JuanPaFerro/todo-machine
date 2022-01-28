import React from "react";
import IconComponent from "../IconComponent";
import { Welcome } from "./styles";

function WelcomeComponent() {
  return (
    <Welcome>
      <h1>
        Welcome to ToDoMan <IconComponent type="main-icon" />
      </h1>
      <h3>Your favorite app to track your daily tasks </h3>
    </Welcome>
  );
}

export default WelcomeComponent;
