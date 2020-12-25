import React from "react";
import styled from "styled-components";
import Comments from "../comment/comments";
import ViewComments from "../comment/viewComments";
import CommentItem from "../comment/commentItem";

const Container = styled.div`
  border-top: 1px solid #bfbfbf;
  border-bottom: 1px solid #bfbfbf;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #000;
  text-align: center;
  background-color: #efefef;
  padding: 8px 0;
  border-bottom: 1px dashed #bfbfbf;
`;

const Wrap = styled.div`
  padding: 30px 0;
`;

const Image = styled.img`
  width: 100%;
`;

function PerPicture(props) {
  const breedsPos = props.img.indexOf("breeds/");
  const breed = props.img.slice(breedsPos).split("/")[1];
  return (
    <Container>
      <Title>{props.isCat ? "고양이" : breed}</Title>
      <Wrap>
        <Image src={props.img} />
      </Wrap>
      <ViewComments>
        <CommentItem />
      </ViewComments>
      <Comments />
    </Container>
  );
}

export default PerPicture;
