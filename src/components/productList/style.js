import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 160px;
  padding: 5px;
  width: 80%;
  margin: 0 auto;
  border: 1px solid red;
  background: rgb(46, 76, 198);
  background: linear-gradient(
    340deg,
    rgba(46, 76, 198, 1) 5%,
    rgba(164, 244, 121, 1) 59%,
    rgba(10, 47, 7, 1) 100%
  );
  @media (min-width: 900px) {
    width: 800px;
    font-size: 25px;
  }
`;

export const List = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 120px;
  padding: 10px;
  width: 90%;
  margin: 0 auto;
  border: 2px solid darkblue;
  background-color: aliceblue;
  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 2px auto;
    background: rgb(198, 109, 46);
    background: linear-gradient(
      246deg,
      rgba(198, 109, 46, 1) 5%,
      rgba(244, 145, 121, 1) 59%,
      rgba(205, 17, 17, 1) 100%
    );
    padding: 5px;
    p {
      margin: 0;
    }
  }
  @media (min-width: 900px) {
    width: 700px;
  }
`;
