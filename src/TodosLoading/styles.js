import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const Container = styled.div`
  background-color: #1c374bd8;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  box-shadow: 0px 5px 50px rgba(32, 35, 41, 0.15);
  border-radius: 5px;

  background: linear-gradient(45deg, #1c374bd8, #06111de7);
  background-size: 400% 400%;
  animation: ${loadingAnimation} 3s ease-in-out infinite;
`;

export const Text = styled.p`
  margin: 24px 0 24px 24px;
  width: calc(100% - 120px);
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  opacity: 70%;
`;

const Icon = styled.span`
  border-radius: 50px;
  position: absolute;
  
  height: 28px;
  width: 28px;

  background: linear-gradient(45deg, #1c374bd8, #06111de7);
  background-size: 400% 400%;
  animation: ${loadingAnimation} 3s ease-in-out infinite;
`;

export const IconComplete = styled(Icon)`
  left: 12px;
`;

export const IconDelete = styled(Icon)`
  right: 12px;
`;
