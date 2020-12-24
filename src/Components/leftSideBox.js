import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #fff;
  border: 2px solid #bfbfbf;
  border-radius: 10px;
  width: 240px;
  height: 500px;
  box-shadow: 0 2px 3px 0 #bfbfbf;
  padding: 15px 30px;
`;

function LeftSideBox(props) {
  return <Container>{props.children}</Container>;
}

export default LeftSideBox;
