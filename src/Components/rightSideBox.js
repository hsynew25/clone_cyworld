import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #fff;
  width: 250px;
  height: 300px;
  position: absolute;
  top: 32px;
  right: 36px;
`;

function RightSideBox() {
  return <Container></Container>;
}

export default RightSideBox;
