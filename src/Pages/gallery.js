import React, { useState } from "react";
import CenterSideBox from "../Components/centerSideBox";
import ContentsBox from "../Components/contentsBox";
import GelleryFolder from "../Components/gallery/galleryFolder";
import LeftSideBox from "../Components/leftSideBox";
import DogContents from "../Components/gallery/folderPage/dogContents";
import CatContents from "../Components/gallery/folderPage/catContents";
import AllContents from "../Components/gallery/folderPage/allContents";

function Gallery() {
  const tab = {
    0: {
      icon: "📷",
      title: "전체보기",
      showComponent: <AllContents />,
    },
    1: {
      icon: "📒",
      title: "강아지",
      showComponent: <DogContents />,
    },
    2: {
      icon: "📒",
      title: "고양이",
      showComponent: <CatContents />,
    },
  };
  const [activeTab, setActiveTab] = useState(0);
  return (
    <ContentsBox>
      <LeftSideBox>
        <GelleryFolder
          tab={tab}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </LeftSideBox>
      <CenterSideBox>{tab[activeTab].showComponent}</CenterSideBox>
    </ContentsBox>
  );
}

export default Gallery;
