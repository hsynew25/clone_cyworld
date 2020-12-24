import React from "react";
import CenterSideBox from "../Components/centerSideBox";
import ContentsBox from "../Components/contentsBox";
import LeftSideBox from "../Components/leftSideBox";
import Profile from "../Components/profile/profile";
import VisitList from "../Components/visitor/visitList";
import VisitorWriting from "../Components/visitor/VisitorWriting";

function GuestBook() {
  return (
    <ContentsBox>
      <LeftSideBox>
        <Profile />
      </LeftSideBox>
      <CenterSideBox>
        <VisitorWriting />
        <VisitList />
      </CenterSideBox>
    </ContentsBox>
  );
}

export default GuestBook;
