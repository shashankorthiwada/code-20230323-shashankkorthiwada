import React from "react";
import styled from "styled-components";
import { ItemViewContainer } from "./secondScreen";

const HeaderText = styled.h1`
  position: absolute;
  width: 274px;
  height: 70px;
  left: 98px;
  top: 44px;
  font-family: Exo 2;
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 110%;
  /* or 70px */
  display: flex;
  align-items: center;
  color: #000000;
`;

const SubText = styled.div`
  position: absolute;
  width: 300px;
  height: 20px;
  left: 98px;
  top: 160px;

  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 110%;
  /* identical to box height, or 20px */

  display: flex;
  align-items: center;

  color: #000000;
`;

const RoomViewContainer = styled.div`
  position: absolute;
  border-radius: 15px;
`;

const DescriptionContainer = styled.div`
  box-sizing: border-box;

  position: absolute;
  height: 100px;
  background: linear-gradient(
    94.33deg,
    rgba(255, 255, 255, 0.6) 3.19%,
    rgba(255, 255, 255, 0.1) 99.26%
  );
  backdrop-filter: blur(5px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 15px;
`;

const DescriptionText = styled.div`
  position: absolute;
  height: 26px;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 110%;
  /* or 26px */

  display: flex;
  align-items: center;

  color: #000000;
`;

const DescriptionSubText = styled.div`
  position: absolute;
  width: 300px;
  height: 30px;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 110%;
  /* or 15px */

  display: flex;
  align-items: center;

  color: #000000;
`;

const ViewContainer = ({
  roomViewClass,
  descriptionViewClass,
  descriptionTextClass,
  descriptionText,
  descriptionSubTextClass,
  descriptionSubText,
}) => {
  return (
    <>
      <RoomViewContainer className={roomViewClass} />
      <DescriptionContainer className={descriptionViewClass} />
      <DescriptionText className={descriptionTextClass}>
        {descriptionText}
      </DescriptionText>
      <DescriptionSubText className={descriptionSubTextClass}>
        {descriptionSubText}
      </DescriptionSubText>
    </>
  );
};

export const ThirdScreen = () => {
  return (
    <>
      <HeaderText>About Us</HeaderText>
      <SubText>Allow us to tell you a short story...</SubText>
      <div style={{ display: "flex" }}>
        <ViewContainer
          roomViewClass={"pantry-room-image-container"}
          descriptionViewClass={"pantry-description-view"}
          descriptionTextClass={"pantry-description-text"}
          descriptionText={"Chapter I"}
          descriptionSubTextClass={"pantry-description-sub-text"}
          descriptionSubText={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun"
          }
        />

        <ViewContainer
          roomViewClass={"hall-room-image-container"}
          descriptionViewClass={"hall-description-view"}
          descriptionTextClass={"hall-description-text"}
          descriptionText={"Chapter II"}
          descriptionSubTextClass={"hall-description-sub-text"}
          descriptionSubText={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun"
          }
        />
      </div>
    </>
  );
};
