import React from "react";
import IconComponent from "../IconComponent";
import "./WelcomeComponent.css";

function WelcomeComponent() {
  return (
    <div className="WelcomeComponent">
      <h1>
        Welcome to ToDoMan <IconComponent type="main-icon" />
      </h1>
      <h3>Your favorite app to track your daily tasks </h3>
    </div>
  );
}

export default WelcomeComponent;
