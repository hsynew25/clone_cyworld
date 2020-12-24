import React from "react";
import styled from "styled-components";

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

function Comments() {
  return (
    <CommentWrap>
      <Comment />
      <SaveComment>확인</SaveComment>
    </CommentWrap>
  );
}

export default Comments;
