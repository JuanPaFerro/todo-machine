import styled from "styled-components";

export const Form = styled.form`
  width: 90%;
  max-width: 300px;
  background-color: #30668379;
  padding: 33px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
`;

export const Label = styled.label`
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  color: whitesmoke;
  margin-bottom: 26px;
`;

export const TextArea = styled.textarea`
  background-color: #06111dda;
  border: 2px solid #306683e8;
  border-radius: 4px;
  box-shadow: 0px 5px 50px rgba(32, 35, 41, 0.25);
  color: whitesmoke;
  font-family: "Zen Kaku Gothic Antique";
  font-size: 20px;
  text-align: center;
  padding: 12px;
  height: 96px;
  width: calc(100%-25px);
  &::placeholder {
    color: whitesmoke;
    font-family: "Zen Kaku Gothic Antique";
    font-weight: 400px;
  }
  &:focus {
    outline-color: #306683e8;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Button = styled.button`
  cursor: pointer;
  display: inline-block;
  font-size: 20px;
  color: whitesmoke;
  font-weight: 400;
  width: 120px;
  height: 48px;
  border-radius: 4px;
  border: none;
  font-family: "Zen Kaku Gothic Antique";
`;

export const ButtonAdd = styled(Button)`
  background: #49c9dda4;
  box-shadow: 0px 5px 25px rgba(97, 217, 250, 0.158);
  &:hover {
    background: #49c9ddf6;
  }
`;
export const ButtonCancel = styled(Button)`
  background: rgba(196, 70, 70, 0.767);
  &:hover {
    background: rgb(196, 70, 70);
  }
`;
