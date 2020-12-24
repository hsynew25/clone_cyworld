import React from "react";
import styled from "styled-components";
import m1 from "../../minime/1.png";
import m2 from "../../minime/2.png";
import m3 from "../../minime/3.png";
import m4 from "../../minime/4.png";
import m5 from "../../minime/5.png";

const SelectMinime = styled.div`
  width: 280px;
  padding: 20px;
  background-color: beige;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  bottom: -235px;
`;

const ItemMinime = styled.button`
  width: 60px;
  height: 60px;
  margin: 10px;
  padding: 0;

  img {
    width: 100%;
    height: 100%;
  }
`;

function DropdownMinime(props) {
  return props.isShow ? (
    <SelectMinime>
      <ItemMinime>
        <img src={m1} />
      </ItemMinime>
      <ItemMinime>
        <img src={m2} />
      </ItemMinime>
      <ItemMinime>
        <img src={m3} />
      </ItemMinime>
      <ItemMinime>
        <img src={m4} />
      </ItemMinime>
      <ItemMinime>
        <img src={m5} />
      </ItemMinime>
    </SelectMinime>
  ) : null;
}

export default DropdownMinime;
