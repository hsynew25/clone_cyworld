import React from "react";
import styled from "styled-components";
import "../font.css";

const Container = styled.div`
  margin-top: 10px;
`;

const UserInfo = styled.div`
  color: #a0a0a0;

  span:not(:first-child) {
    margin-left: 5px;
  }
`;

const Name = styled.span`
  color: #627a96;
  font-weight: bold;
  font-size: 20px;
  vertical-align: middle;
`;

const Sex = styled.span`
  font-size: 16px;
  vertical-align: middle;
`;

const Birthday = styled.span`
  font-size: 13px;
  vertical-align: bottom;
`;

const Email = styled.div`
  color: #efa581;
  font-family: "Cute Font";
  font-size: 20px;
`;

function ProfileInfo() {
  return (
    <Container>
      <UserInfo>
        <Name>홍성연</Name>
        <Sex>(♀)</Sex>
        {/* 남자 : ♂ */}
        <Birthday>1995.7.31</Birthday>
        <Email>hsynew25@cyworld.com</Email>
      </UserInfo>
    </Container>
  );
}

export default ProfileInfo;
