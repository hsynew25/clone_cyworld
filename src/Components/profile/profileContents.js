import React from "react";
import styled from "styled-components";
import "../../font.css";
import btnImg from "../../img/EditAndHis.png";

const Container = styled.div`
  min-height: 330px;
`;

const ImgWrap = styled.div`
  max-width: 176px;
  min-height: 100px;
  max-height: 200px;
  overflow: hidden;
  margin: 10px 0;
`;

const Img = styled.img`
  width: 100%;
`;

const ProfileP = styled.p`
  height: 120px;
  overflow: scroll;
  font-size: 15px;
`;

const EHWrap = styled.div`
  margin-top: 5px;
  border-bottom: 1px solid #bfbfbf;
`;

const Button = styled.button`
  background: url(${btnImg}) no-repeat ${(props) => props.x || 0} -1px / 115px 20px;
  width: ${(props) => props.width || "50px"};
  height: 20px;
  border: none;
`;

function ProfileContents() {
  return (
    <Container>
      <ImgWrap>
        <Img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbMiJoz%2FbtqQXB4BLDc%2FqlBJjujExhXhkuXGWKqmjk%2Fimg.png" />
      </ImgWrap>
      <ProfileP>
        난... ㄱㅏ끔... 눈물을 흘린ㄷㅏ... ㄱㅏ끔은 눈물을 참을 수 없는 ㄴㅐ가
        별루ㄷㅏ... 맘이 ㅇㅏㅍㅏ서... 소ㄹㅣ치며... 울 수 있ㄷㅏ는 건...
        좋은ㄱㅓㅇㅑ...
      </ProfileP>
      <EHWrap>
        <Button x={0} width={"46px"} />
        <Button x={"-43px"} width={"78px"} />
      </EHWrap>
    </Container>
  );
}

export default ProfileContents;
