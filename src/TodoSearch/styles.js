import styled from "styled-components";

export const Search = styled.input`
  background: #06111de7;
  border-radius: 5px;
  border: 2px solid #1c374b;
  margin: 0 24px;
  height: 50px;
  width: calc(100% - 62px);
  font-size: 24px;
  text-align: center;
  font-family: "Zen Kaku Gothic Antique";
  font-weight: 400;
  color: whitesmoke;
  box-shadow: 0px 5px 50px #1c374b3b;
  &::placeholder {
    color: whitesmoke;
    font-family: "Zen Kaku Gothic Antique";
    font-weight: 400;
  }
  &:focus {
    outline-color: #61dafa;
  }
  &:disabled {
    opacity: 60%;
  }
`;
