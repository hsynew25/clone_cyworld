import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px 0;
`;

const Header = styled.div`
  color: #26a0be;
  font-weight: bold;
  font-size: 18px;
  padding: 0 0 5px;
  border-bottom: 1px solid #bfbfbf;
`;

const FolderList = styled.ul`
  padding: 20px 0;
  color: #4871a2;
`;

const Icon = styled.span`
  display: inline-block;
  margin-right: 8px;
`;

const Folder = styled.li`
  font-size: 18px;
  font-weight: ${(props) => (props.current ? "bold" : "normal")};

  &:not(:first-child) {
    margin-top: 5px;
  }
`;

function GelleryFolder() {
  return (
    <Container>
      <Header>PHOTO ALBUM</Header>
      <FolderList>
        <Folder current={true}>
          <Icon>📷</Icon>전체보기
        </Folder>
        <Folder current={false}>
          <Icon>📒</Icon>강아지
        </Folder>
        <Folder current={false}>
          <Icon>📒</Icon>고양이
        </Folder>
      </FolderList>
    </Container>
  );
}

export default GelleryFolder;
