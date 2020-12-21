import React from "react";
import styled from "styled-components";
import ContentsBox from "./Components/contentsBox";

const Container = styled.div`
  background-color: #b3b3b3;
  background-size: 20px 20px;
  background-image: repeating-linear-gradient(
      90deg,
      #828282,
      #828282 1px,
      transparent 0,
      transparent 20px
    ),
    repeating-linear-gradient(
      0deg,
      #828282,
      #828282 1px,
      transparent 0,
      transparent 20px
    );

  border: 1px solid #828282;
  width: 1180px;
  height: 700px;
  margin: 50px auto;
`;

function Home() {
  return (
    <Container>
      <ContentsBox />
    </Container>
  );
}

export default Home;
