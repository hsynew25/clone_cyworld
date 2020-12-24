import React from "react";
import styled from "styled-components";
import ContainerTitle from "./containerTitle";
import TodayVisit from "./todayVisit";
import TabButton from "./tabButton";

const ContainerOuter = styled.div`
  width: 920px;
  height: 630px;
  margin: 30px;
  border: 34px solid #add3dd;
  border-radius: 10px;
  position: relative;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: -35px;
    left: -35px;
    width: 920px;
    height: 630px;
    border: 1px solid #737373;
    border-radius: 10px;
  }
`;

const ContainerInner = styled.div`
  position: absolute;
  background-color: #efefef;
  top: -3px;
  bottom: -3px;
  left: -3px;
  right: -3px;
  border-radius: 10px;
  padding: 30px 7px 7px;
`;

const InnerBorder = styled.div`
  position: absolute;
  top: -12px;
  left: -12px;
  right: -12px;
  bottom: -12px;

  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%23FFFFFFCC' stroke-width='3' stroke-dasharray='4%2c5' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 10px;
`;

const MainBox = styled.div`
  display: flex;
  position: relative;
`;

const Header = styled.div``;

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

function ContentsBox(props) {
  return (
    <ContainerOuter>
      <InnerBorder />
      <ContainerInner>
        <Header>
          <TodayVisit />
          <ContainerTitle />
        </Header>
        <MainBox>
          {props.children}
          <TabWrap>
            <TabButton to="/">홈</TabButton>
            <TabButton to="/gallery">사진첩</TabButton>
            <TabButton to="/guestbook">방명록</TabButton>
          </TabWrap>
        </MainBox>
      </ContainerInner>
    </ContainerOuter>
  );
}

export default ContentsBox;
