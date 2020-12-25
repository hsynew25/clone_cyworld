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
  cursor: pointer;

  &:not(:first-child) {
    margin-top: 5px;
  }
`;

function GelleryFolder(props) {
  const tabInfo = Object.values(props.tab);
  return (
    <Container>
      <Header>PHOTO ALBUM</Header>
      <FolderList>
        {tabInfo &&
          tabInfo.length > 0 &&
          tabInfo.map((t, idx) => (
            <Folder
              key={idx}
              onClick={() => props.setActiveTab(idx)}
              current={props.activeTab === idx}
            >
              <Icon>{t.icon}</Icon>
              {t.title}
            </Folder>
          ))}
      </FolderList>
    </Container>
  );
}

export default GelleryFolder;
