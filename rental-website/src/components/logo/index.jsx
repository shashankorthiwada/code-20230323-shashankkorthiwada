import React from "react";
import styled from "styled-components";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoText = styled.h1`
  position: absolute;
  height: 53px;
  left: 50px;
  top: 20px;
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  line-height: 54px;
  color: #fff;
  margin: 0;
  margin-left: 4px;
`;

export function Logo(props) {
  return (
    <LogoWrapper>
      <LogoText>Your Logo</LogoText>
    </LogoWrapper>
  );
}
