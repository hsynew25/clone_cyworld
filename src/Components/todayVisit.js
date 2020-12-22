import React from "react";
import styled from "styled-components";
import "../font.css";

const Container = styled.div`
  width: 240px;
  text-align: center;
  margin: 7px 0;
  display: inline-block;
`;

const VisitBox = styled.span`
  color: #525252;
`;

const VisitTitle = styled.span`
  font-family: "Press Start 2P";
  font-size: 10px;
  margin-right: 3px;
`;

const VisitNum = styled.span`
  font-family: sans-serif;
  color: ${(props) => props.color || "inherit"};
  font-weight: bold;
`;

const Divider = styled.span`
  display: inline-block;
  margin: 0 10px;
  font-size: 14px;
  font-weight: bold;
  color: #525252;
`;

function TodayVisit() {
  return (
    <Container>
      <VisitBox>
        <VisitTitle>TODAY</VisitTitle>
        <VisitNum color={"#de0404"}>18</VisitNum>
      </VisitBox>
      <Divider>|</Divider>
      <VisitBox>
        <VisitTitle>TOTAL</VisitTitle>
        <VisitNum>3527</VisitNum>
      </VisitBox>
    </Container>
  );
}

export default TodayVisit;
