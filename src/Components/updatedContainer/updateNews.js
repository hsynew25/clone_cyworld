import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  border-top: 1px solid #bfbfbf;
`;

const List = styled.ul`
  padding: 5px 0;
`;

const Item = styled.li`
  display: flex;

  &:not(:first-child) {
    margin-top: 5px;
  }
`;

const Symbol = styled.div`
  width: 50px;
  text-align: center;
  color: #fff;
  background-color: #e27776;
  padding: 1px 0;
  border-radius: 2px;
  font-size: 16px;
`;

const Title = styled.div`
  font-size: 17px;
  margin-left: 7px;
  color: #525252;
`;

function UpdateNews() {
  return (
    <Container>
      <List>
        <Item>
          <Symbol>사진첩</Symbol>
          <Title>내 사진</Title>
        </Item>
        <Item>
          <Symbol>사진첩</Symbol>
          <Title>친구 사진</Title>
        </Item>
        <Item>
          <Symbol>사진첩</Symbol>
          <Title>가족 사진</Title>
        </Item>
        <Item>
          <Symbol>사진첩</Symbol>
          <Title>내 새끼</Title>
        </Item>
      </List>
    </Container>
  );
}

export default UpdateNews;
