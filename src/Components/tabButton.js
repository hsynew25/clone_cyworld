import React from "react";
import styled from "styled-components";

const Container = styled.button`
  width: 76px;
  height: 44px;
  font-size: 16px;
  background-color: #248db4; //click되면 #fff로 변경
  border: 2px solid #1a6886;
  border-left: none;
  border-radius: 0 10px 10px 0;
  color: #fff;
`;

function TabButton(props) {
  return <Container>{props.children}</Container>;
}

export default TabButton;
