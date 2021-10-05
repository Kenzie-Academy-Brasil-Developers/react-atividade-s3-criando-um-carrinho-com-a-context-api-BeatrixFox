import styled from "styled-components";

export const Btn = styled.button`
  font-size: 15px;
  height: 20px;
  border: 2px solid transparent;
  font-weight: bold;
  :hover {
    background-color: lightsteelblue;
  }
  @media (min-width: 900px) {
    font-size: 20px;
    height: 30px;
  }
`;
