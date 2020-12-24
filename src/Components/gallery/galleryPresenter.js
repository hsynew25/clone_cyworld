import React from "react";
import styled from "styled-components";
import PerPicture from "./perPicture";

const List = styled.ul``;

const Item = styled.li``;

function GalleryPresenter() {
  return (
    <List>
      <Item>
        <PerPicture />
      </Item>
    </List>
  );
}

export default GalleryPresenter;
