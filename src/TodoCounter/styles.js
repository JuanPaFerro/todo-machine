import styled from "styled-components";

export const Counter = styled.div`
  text-align: center;
  margin: 0;
  padding: 10px;

  p {
    font-size: 18px;
  }
`;

export const CounterLoading = styled(Counter)`
  opacity: 60%;
`;
