import React from "react";
import styled from "styled-components";

const SelectMinime = styled.div`
  width: 280px;
  padding: 20px;
  background-color: beige;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  bottom: -235px;
  z-index: 100;
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

function DropdownMinime({ isShow, setIsShow, setMinime, mArr }) {
  const handleClick = (e) => {
    setMinime(e.target.id);
    setIsShow(false);
  };
  return isShow ? (
    <SelectMinime>
      {mArr.map((item, idx) => (
        <ItemMinime key={idx}>
          <img src={item} alt={"미니미"} id={idx} onClick={handleClick} />
        </ItemMinime>
      ))}
    </SelectMinime>
  ) : null;
}

export default DropdownMinime;
