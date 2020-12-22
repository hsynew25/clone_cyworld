import React from "react";
import styled from "styled-components";
import Profile from "./profile";

const Container = styled.div`
  background-color: #fff;
  border: 2px solid #bfbfbf;
  border-radius: 10px;
  width: 240px;
  height: 500px;
  box-shadow: 0 2px 3px 0 #bfbfbf;
  padding: 15px 30px;
`;

function LeftSideBox() {
  return (
    <Container>
      <Profile />
    </Container>
  );
}

export default LeftSideBox;
