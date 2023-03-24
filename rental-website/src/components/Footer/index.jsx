import React from "react";
import styled from "styled-components";

const FooterLogo = styled.div`
  position: absolute;
  width: 205px;
  height: 53px;
  left: 93px;
  top: 640px;

  font-family: Dancing Script;
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  line-height: 54px;

  color: #000000;
`;

const CopyRightContainer = styled.div`
  position: absolute;
  width: 159px;
  height: 43px;
  left: 105px;
  top: 691px;

  font-family: Ubuntu;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 132%;
  /* or 18px */

  display: flex;
  align-items: center;

  color: #000000;
`;

const ExploreContainer = styled.div`
  position: absolute;
  width: 104px;
  height: 39px;
  left: 426px;
  top: 680px;

  font-family: Exo 2;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 110%;
  /* or 22px */

  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
`;

const AboutContainer = styled.div`
  position: absolute;
  width: 104px;
  height: 39px;
  left: 592px;
  top: 680px;

  font-family: Exo 2;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 110%;
  /* or 22px */

  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
`;

const CitiesContainer = styled.div`
  position: absolute;
  width: 104px;
  height: 39px;
  left: 758px;
  top: 680px;

  font-family: Exo 2;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 110%;
  /* or 22px */

  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
`;

const CallContainer = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 131px;
  height: 50px;
  left: 924px;
  top: 680px;

  border: 2px solid #000000;
  border-radius: 10px;
`;

const CallButtonContainer = styled.div`
  position: absolute;
  width: 104px;
  height: 39px;
  left: 966px;
  top: 686px;

  font-family: Exo 2;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 110%;
  /* or 22px */

  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
`;

export const Footer = () => {
  return (
    <>
      <FooterLogo>Your Logo</FooterLogo>
      <CopyRightContainer>
        © 2021 Company Name All rights reserved
      </CopyRightContainer>
      <ExploreContainer>Explore</ExploreContainer>
      <AboutContainer>AboutUs</AboutContainer>
      <CitiesContainer>Cities</CitiesContainer>
      <CallContainer />
      <CallButtonContainer>Call</CallButtonContainer>
    </>
  );
};
