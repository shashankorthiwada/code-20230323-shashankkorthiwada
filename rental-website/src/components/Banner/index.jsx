import React from "react";
import styled from "styled-components";

const BannerContainer = styled.div`
  position: absolute;
  width: 795px;
  height: 271px;
  top: 120px;
  left: 178px;
`;

const BannerText = styled.h1`
  color: #fff;
  margin: 0;
  margin-left: 4px;
  font-family: Exo 2;
  font-style: normal;
  font-weight: 700;
  font-size: 100px;
  line-height: 110px;
  display: flex;
  align-items: center;
  text-align: center;
`;

const BannerSubText = styled.h3`
  color: #fff;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 110%;
  display: flex;
  align-items: center;
  text-align: center;
`;

const BannerSubContainer = styled.div`
  position: absolute;
  width: 462px;
  height: 68px;
  top: 345px;
  left: 367px;
`;

export function Banner(props) {
  return (
    <>
      <BannerContainer>
        <BannerText>Rethink Your Living & Renting</BannerText>
      </BannerContainer>
      <BannerSubContainer>
        <BannerSubText>Make your stay painless with us</BannerSubText>
      </BannerSubContainer>
    </>
  );
}
