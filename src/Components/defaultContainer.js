import React from "react";
import styled from "styled-components";
import RightSideBox from "./rightSideBox/rightSideBox";

const Container = styled.div`
  background-color: #b3b3b3;
  background-size: 20px 20px;
  background-image: repeating-linear-gradient(
      90deg,
      #9e9e9e,
      #9e9e9e 1px,
      transparent 0,
      transparent 20px
    ),
    repeating-linear-gradient(
      0deg,
      #9e9e9e,
      #9e9e9e 1px,
      transparent 0,
      transparent 20px
    );

  border: 1px solid #9e9e9e;
  width: 1280px;
  height: 710px;
  margin: 50px auto;
  position: relative;
`;

function DefaultContainer(props) {
  return (
    <Container>
      {props.children}
      <RightSideBox />
    </Container>
  );
}

export default DefaultContainer;
