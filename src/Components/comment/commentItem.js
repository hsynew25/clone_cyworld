import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 15px;
  font-size: 18px;
`;

const Name = styled.span`
  display: inline-block;
  margin-right: 5px;
  color: #4871a2;
`;

const Contents = styled.span``;

const Date = styled.span`
  display: inline-block;
  color: #969696;
  font-size: 14px;
  margin-left: 5px;
`;

function CommentItem() {
  return (
    <Container>
      <Name>홍숙연:</Name>
      <Contents>
        퍼가요~❤️<Date>(2020.12.25 03:02)</Date>
      </Contents>
    </Container>
  );
}

export default CommentItem;
