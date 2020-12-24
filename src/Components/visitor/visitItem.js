import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Header = styled.div`
  background-color: #efefef;
  padding: 10px 15px;
  font-size: 16px;
  vertical-align: middle;

  span:not(:first-child) {
    margin-left: 15px;
  }

  span {
    vertical-align: bottom;
  }
`;

const Index = styled.span`
  font-size: 12px;
  span {
    font-size: 13px;
  }
`;

const VisitorName = styled.span`
  color: #4871a2;
  &:after {
    content: "🏠";
    display: inline-block;
    margin-left: 5px;
  }
`;

const VisitDate = styled.span`
  font-size: 14px;
`;

const InnerContainer = styled.div`
  padding: 15px;
  display: flex;
`;

const ShowMiniMe = styled.div`
  width: 130px;
  height: 130px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Text = styled.div`
  width: 336px;
  min-height: 130px;
  padding: 20px;
  font-size: 16px;
`;

const CommentWrap = styled.div`
  background-color: #efefef;
  display: flex;
  padding: 15px;
`;

const Comment = styled.textarea`
  resize: none;
  height: 36px;
  padding: 10px;
  width: 406px;
  border: 1px solid #bfbfbf;
  color: #525252;
`;

const SaveComment = styled.button`
  width: 42px;
  height: 36px;
  font-size: 14px;
  margin-left: 10px;
  border: 1px solid #bfbfbf;
  border-radius: 5px;
  background-color: #fff;
  color: #525252;
`;

function VisitItem(props) {
  return (
    <Container>
      <Header>
        <Index>
          NO.<span>{props.num}</span>
        </Index>
        <VisitorName>{props.name}</VisitorName>
        <VisitDate>(2020.12.24 00:34)</VisitDate>
      </Header>
      <InnerContainer>
        <ShowMiniMe>
          <img src={props.img} />
        </ShowMiniMe>
        <Text>{props.txt}</Text>
      </InnerContainer>
      <CommentWrap>
        <Comment />
        <SaveComment>확인</SaveComment>
      </CommentWrap>
    </Container>
  );
}

export default VisitItem;
