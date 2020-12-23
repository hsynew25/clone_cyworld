import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 15px;
`;

const Header = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #26a0be;
  margin-bottom: 5px;
`;

const List = styled.ul`
  border-top: 1px solid #bfbfbf;
  padding: 5px 0;
`;

const Item = styled.li`
  color: #525252;
  &:before {
    content: "• ";
    display: inline;
    color: #bfbfbf;
    font-size: 18px;
  }

  &:not(:first-child) {
    margin-top: 5px;
  }
`;

const Content = styled.span``;

const Relation = styled.span``;

const FriendName = styled.span`
  color: #4871a2;
`;

function WhatFriendSay() {
  return (
    <Container>
      <Header>Waht friends say</Header>
      <List>
        <Item>
          <Content>뭐하고 사냐 싸이월드야</Content> ( <Relation>베프</Relation>
          <FriendName> 홍숙연 </FriendName> )
        </Item>
        <Item>
          <Content>언제 모바일 버전 출시할래?</Content> ({" "}
          <Relation>조언충</Relation>
          <FriendName> 인스타 </FriendName> )
        </Item>
        <Item>
          <Content>천천히 해~ 어차피 인스타 못이겨 내 이야긴 아니고;</Content> ({" "}
          <Relation>찌질이</Relation>
          <FriendName> 페이스북 </FriendName> )
        </Item>
      </List>
    </Container>
  );
}

export default WhatFriendSay;
