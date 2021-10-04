import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 200px;
  border: 1px solid red;
`;

export const List = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 120px;
  padding: 10px;
  width: 500px;
  border: 2px solid darkblue;
  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    p {
      margin: 0;
    }
  }
`;
