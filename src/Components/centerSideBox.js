import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 600px;
  background-color: #fff;
  border: 2px solid #bfbfbf;
  border-radius: 10px;
  height: 500px;
  margin-left: 4px;
  box-shadow: 0 2px 3px 0 #bfbfbf;
`;

function CenterSideBox() {
  return <Container>center</Container>;
}

export default CenterSideBox;
