import React, { useState } from "react";
import styled from "styled-components";
import m6 from "../../minime/6.png";
import DropdownMinime from "./dropdownMinime";

const Container = styled.div`
  padding: 15px 15px 0;
  background-color: #efefef;
  border-top: 1px solid #bfbfbf;
  border-bottom: 1px solid #bfbfbf;
`;

const Wrap = styled.div`
  display: flex;
`;

const ShowMiniMe = styled.div`
  width: 130px;
  height: 130px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }
`;

const SettingMinime = styled.button`
  position: absolute;
  bottom: -30px;
  left: 30px;
  border: none;
  font-size: 16px;
  color: #525252;

  &:after {
    content: "▾";
    display: inline-block;
    font-size: 16px;
    color: #de5300;
    margin-left: 3px;
    vertical-align: text-bottom;
  }
`;

const VisitMsg = styled.textarea`
  border: 1px solid #bfbfbf;
  width: 330px;
  height: 130px;
  margin-left: 6px;
  background-color: #fff;
  padding: 15px;
  resize: none;
  color: #525252;
`;

const Footer = styled.div`
  text-align: right;
  padding: 5px 0;
`;

const SaveBtn = styled.button`
  background-color: #fff;
  border: 1px solid #bfbfbf;
  border-radius: 5px;
  padding: 3px 8px;
  font-size: 16px;
  color: #525252;
`;

function VisitorWriting() {
  const [isShow, setIsShow] = useState(false);
  return (
    <Container>
      <Wrap>
        <ShowMiniMe>
          <img src={m6} />
          <SettingMinime onClick={() => setIsShow(!isShow)}>
            미니미
          </SettingMinime>
          <DropdownMinime isShow={isShow} />
        </ShowMiniMe>
        <VisitMsg />
      </Wrap>
      <Footer>
        <SaveBtn>확인</SaveBtn>
      </Footer>
    </Container>
  );
}

export default VisitorWriting;
