import React from "react";
import styled from "styled-components";

const ContainerOuter = styled.div`
  width: 900px;
  height: 630px;
  margin: 30px;
  border: 34px solid #add3dd;
  border-radius: 10px;
  position: relative;
`;

const ContainerInner = styled.div`
  position: absolute;
  background-color: #efefef;
  top: -3px;
  bottom: -3px;
  left: -3px;
  right: -3px;
  border-radius: 10px;
`;

const InnerBorder = styled.div`
  position: absolute;
  top: -12px;
  left: -12px;
  right: -12px;
  bottom: -12px;

  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='white' stroke-width='5' stroke-dasharray='2%2c 8' stroke-dashoffset='0' stroke-linecap='butt'/%3e%3c/svg%3e");
  border-radius: 10px;
`;

function ContentsBox() {
  return (
    <ContainerOuter>
      <InnerBorder></InnerBorder>
      <ContainerInner></ContainerInner>
    </ContainerOuter>
  );
}

export default ContentsBox;
