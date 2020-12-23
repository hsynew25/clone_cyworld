import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin-left: 10px;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  border-top: 1px dashed #bfbfbf;
  border-bottom: 1px dashed #bfbfbf;
`;

const Item = styled.li`
  padding: 7px 0;
  width: 50%;
  height: 31px;

  &:nth-child(n + 3) {
    border-top: 1px dashed #bfbfbf;
  }
`;

const Title = styled.span`
  font-size: 17px;
  margin-right: 5px;
  color: #525252;
`;

const UploadCount = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #4871a2;
`;

function DirectoryInfo() {
  return (
    <Container>
      <List>
        <Item>
          <Title>사진첩</Title>
          <UploadCount>3/343</UploadCount>
        </Item>
        <Item>
          <Title>방명록</Title>
          <UploadCount>5/2357</UploadCount>
        </Item>
        <Item>
          <Title>방명록</Title>
          <UploadCount>5/2357</UploadCount>
        </Item>
        <Item>
          <Title>방명록</Title>
          <UploadCount>5/2357</UploadCount>
        </Item>
        <Item />
        <Item />
      </List>
    </Container>
  );
}

export default DirectoryInfo;
