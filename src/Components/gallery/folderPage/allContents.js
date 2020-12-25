import React from "react";
import styled from "styled-components";
import CatContents from "./catContents";
import DogContents from "./dogContents";

const Container = styled.div``;

function AllContents() {
  return (
    <Container>
      <DogContents />
      <CatContents />
    </Container>
  );
}

export default AllContents;
