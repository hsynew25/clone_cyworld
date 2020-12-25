import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  padding: 40px;
`;

function Loading() {
  return <Container>Loading...⏰</Container>;
}

export default Loading;
