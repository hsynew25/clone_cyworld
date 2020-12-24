import React from "react";
import { getDogApi } from "../api";
import CenterSideBox from "../Components/centerSideBox";
import ContentsBox from "../Components/contentsBox";
import GelleryFolder from "../Components/gallery/galleryFolder";
import LeftSideBox from "../Components/leftSideBox";
import GalleryPresenter from "../Components/gallery/galleryPresenter";

const getDog = async () => {
  try {
    const {
      data: { message },
    } = await getDogApi();

    return message;
  } catch (error) {
    console.log(error);
  }
};

function Gallery() {
  const dogImg = getDog();
  console.log(dogImg);
  return (
    <ContentsBox>
      <LeftSideBox>
        <GelleryFolder />
      </LeftSideBox>
      <CenterSideBox>
        <GalleryPresenter />
      </CenterSideBox>
    </ContentsBox>
  );
}

export default Gallery;
