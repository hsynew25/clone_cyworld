import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Button = styled.button`
  width: 76px;
  height: 44px;
  font-size: 16px;
  background-color: ${(props) => (props.current ? "#fff" : "#248db4")};
  border: 2px solid #1a6886;
  border-left: none;
  border-radius: 0 10px 10px 0;
  color: ${(props) => (props.current ? "#000" : "#fff")};
  position: relative;
`;

const SLink = styled(Link)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

function TabButton(props) {
  const {
    location: { pathname },
  } = props;
  return (
    <Button current={pathname === props.to}>
      {props.children}
      <SLink to={props.to} />
    </Button>
  );
}

export default withRouter(TabButton);
