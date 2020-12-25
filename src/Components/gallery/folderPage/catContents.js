import React from "react";
import styled from "styled-components";
import { FetchCatImg } from "../../../Fetch/fetchCatImg";
import Loading from "../../loading";
import PerPicture from "../perPicture";

const List = styled.ul``;

const Item = styled.li`
  margin-bottom: 40px;
`;

function CatContents() {
  const { loading, images } = FetchCatImg();
  return loading ? (
    <Loading />
  ) : (
    <List>
      {images !== "" && (
        <Item>
          <PerPicture img={images} isCat={true} />
        </Item>
      )}
    </List>
  );
}

export default CatContents;
