import React from "react";
import styled from "styled-components";
import ContentsBox from "./contentsBox";
import LeftSideBox from "./leftSideBox";
import CenterSideBox from "./centerSideBox";
import TabButton from "./tabButton";
import RightSideBox from "./rightSideBox";

const Container = styled.div`
  background-color: #b3b3b3;
  background-size: 20px 20px;
  background-image: repeating-linear-gradient(
      90deg,
      #9e9e9e,
      #9e9e9e 1px,
      transparent 0,
      transparent 20px
    ),
    repeating-linear-gradient(
      0deg,
      #9e9e9e,
      #9e9e9e 1px,
      transparent 0,
      transparent 20px
    );

  border: 1px solid #9e9e9e;
  width: 1280px;
  height: 710px;
  margin: 50px auto;
  position: relative;
`;

const TabWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 10px;
  right: -74px;

  button:not(:first-child) {
    margin-top: 3px;
  }
`;

function DefaultContainer() {
  return (
    <Container>
      <ContentsBox>
        <LeftSideBox></LeftSideBox>
        <CenterSideBox></CenterSideBox>
        <TabWrap>
          <TabButton>홈</TabButton>
          <TabButton>사진첩</TabButton>
          <TabButton>방명록</TabButton>
        </TabWrap>
      </ContentsBox>
      <RightSideBox></RightSideBox>
    </Container>
  );
}

export default DefaultContainer;
