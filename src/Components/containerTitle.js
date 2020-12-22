import React from "react";
import styled from "styled-components";
import "../font.css";

const Container = styled.div`
  display: inline-block;
  width: 600px;
  padding: 0 20px;
  font-size: 24px;
  font-weight: bold;
  vertical-align: middle;
  color: #0c7cbf;
  position: relative;
`;

const HomepageURL = styled.span`
  position: absolute;
  right: 5px;
  bottom: -2px;
  font-family: "Cute Font";
  font-size: 18px;
  color: #525252;
`;

function ContainerTitle() {
  return (
    <Container>
      사이좋은 사람들, 싸이월드
      <HomepageURL>http://www.cyworld.com/hsynew25</HomepageURL>
    </Container>
  );
}

export default ContainerTitle;
