import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #efefef;
`;

function ViewComments(props) {
  return <Container>{props.children}</Container>;
}

export default ViewComments;
