import React from "react";
import styled from "styled-components";
import miniroomImg from "../img/miniroom3.jpeg";

const Container = styled.div``;

const Header = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #26a0be;
  margin-bottom: 5px;
`;

const MyMiniroom = styled.div`
  background-image: url(${miniroomImg});
  height: 234px;
  border: 1px solid #bfbfbf;
`;

const Footer = styled.div`
  background-color: #efefef;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 14px;

  span {
    vertical-align: middle;
  }

  &:before {
    content: "‣";
    display: inline;
    color: #26a0be;
  }
`;

function MiniRoom() {
  return (
    <Container>
      <Header>Miniroom</Header>
      <MyMiniroom />
      <Footer>
        <Button>
          <span>내 미니룸</span>
        </Button>
        <Button>
          <span>미니미설정</span>
        </Button>
        <Button>
          <span>미니룸설정</span>
        </Button>
      </Footer>
    </Container>
  );
}

export default MiniRoom;
