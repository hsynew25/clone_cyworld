import React from "react";
import styled from "styled-components";
import ProfileContents from "./profileContents";
import ProfileInfo from "./profileInfo";
import TodayIs from "./todayIs";

const Container = styled.div``;

function Profile() {
  return (
    <Container>
      <TodayIs />
      <ProfileContents />
      <ProfileInfo />
    </Container>
  );
}

export default Profile;
