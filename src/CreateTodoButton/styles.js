import styled from "styled-components";

export const Button = styled.button`
  background-color: #42a1c5;
  box-shadow: 0px 5px 25px #42a2c586;
  border: 1px solid #42a1c5;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
  position: fixed;
  bottom: 24px;
  right: 24px;
  color: whitesmoke;
  padding: 10px;
  z-index: 10;

  &:hover {
    background-color: #49c9dd;
    border: 1px solid whitesmoke;
  }
`;
