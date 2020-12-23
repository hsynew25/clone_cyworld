import React from "react";
import styled from "styled-components";
import DirectoryInfo from "./directoryInfo";
import UpdateNews from "./updateNews";

const Container = styled.div`
  min-height: 150px;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
`;

const Header = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #26a0be;
  margin-bottom: 5px;
`;

function UpdatedContainer() {
  return (
    <Container>
      <Header>Updated news</Header>
      <Wrap>
        <UpdateNews />
        <DirectoryInfo />
      </Wrap>
    </Container>
  );
}

export default UpdatedContainer;
