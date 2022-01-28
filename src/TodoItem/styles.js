import styled from "styled-components";

export const Item = styled.li`
  background-color: #1c374bd8;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  box-shadow: 0px 5px 50px rgba(32, 35, 41, 0.15);
  border-radius: 5px;
  cursor: pointer;
`;

export const Text = styled.p`
  margin: 24px 0 24px 24px;
  width: calc(100% - 120px);
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
`;

export const TextComplete = styled(Text)`
  text-decoration: line-through;
`;

const Icon = styled.span`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
  font-weight: bold;
`;

export const IconCheck = styled(Icon)`
  position: absolute;
  left: 12px;
`;

export const IconActive = styled(IconCheck)`
  color: #4caf50;
`;

export const IconDelete = styled(Icon)`
  position: absolute;
  right: 0;
  color: whitesmoke;
  z-index: 0;
  &:hover {
    color: rgba(214, 35, 35, 0.747);
  }
`;
