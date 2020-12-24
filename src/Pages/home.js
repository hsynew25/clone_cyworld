import React from "react";
import CenterSideBox from "../Components/centerSideBox";
import ContentsBox from "../Components/contentsBox";
import LeftSideBox from "../Components/leftSideBox";
import MiniRoom from "../Components/miniRoom";
import Profile from "../Components/profile/profile";
import UpdatedContainer from "../Components/updatedContainer/updatedContainer";
import WhatFriendSay from "../Components/whatFriendSay";

function Home() {
  return (
    <ContentsBox>
      <LeftSideBox>
        <Profile />
      </LeftSideBox>
      <CenterSideBox>
        <UpdatedContainer />
        <MiniRoom />
        <WhatFriendSay />
      </CenterSideBox>
    </ContentsBox>
  );
}

export default Home;
