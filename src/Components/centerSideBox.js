import React from "react";
import styled from "styled-components";
import MiniRoom from "./miniRoom";
import UpdatedContainer from "./updatedContainer/updatedContainer";
import WhatFriendSay from "./whatFriendSay";

const Container = styled.div`
  width: 600px;
  background-color: #fff;
  border: 2px solid #bfbfbf;
  border-radius: 10px;
  height: 500px;
  margin-left: 4px;
  box-shadow: 0 2px 3px 0 #bfbfbf;
  padding: 20px 50px;
  overflow: scroll;
`;

function CenterSideBox(props) {
  return <Container>{props.children}</Container>;
}

export default CenterSideBox;
