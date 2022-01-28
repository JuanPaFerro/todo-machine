import styled from "styled-components";

export const ChangeAlertContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: rgba(7, 7, 7, 0.589);
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;
export const ChangeAlertContainerBottom = styled.div`
  height: calc(40%);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #06111df6;
`;

export const InnerContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  color: #ffca82;
`;

export const InnerContainerButton = styled.button`
  background-color: #42a1c5;
  box-shadow: 0px 5px 25px #42a2c586;
  border: 1px solid #42a1c5;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
  color: whitesmoke;
  padding: 10px;

  &:hover {
    background-color: #49c9dd;
    border: 1px solid whitesmoke;
  }
`;
