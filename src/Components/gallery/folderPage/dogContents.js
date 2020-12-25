import React from "react";
import styled from "styled-components";
import { FetchDogImg } from "../../../Fetch/fetchDogImg";
import Loading from "../../loading";
import PerPicture from "../perPicture";

const List = styled.ul``;

const Item = styled.li``;

function DogContents() {
  const { loading, images } = FetchDogImg();
  return loading ? (
    <Loading />
  ) : (
    <List>
      {images &&
        images.length > 0 &&
        images.map((img, index) => (
          <Item key={index}>
            <PerPicture img={img} />
          </Item>
        ))}
    </List>
  );
}

export default DogContents;
