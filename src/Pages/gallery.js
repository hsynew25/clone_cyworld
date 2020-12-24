import React from "react";
import CenterSideBox from "../Components/centerSideBox";
import ContentsBox from "../Components/contentsBox";
import LeftSideBox from "../Components/leftSideBox";

function Gallery() {
  return (
    <ContentsBox>
      <LeftSideBox></LeftSideBox>
      <CenterSideBox></CenterSideBox>
    </ContentsBox>
  );
}

export default Gallery;
