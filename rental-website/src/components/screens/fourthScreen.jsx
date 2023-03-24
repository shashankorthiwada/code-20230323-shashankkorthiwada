import React from "react";
import styled from "styled-components";
import { Footer } from "../Footer";

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

const ImageViewContainer = ({
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

export const FourthScreen = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <ImageViewContainer
          roomViewClass={"dining-room-image-container"}
          descriptionViewClass={"dining-description-view"}
          descriptionTextClass={"dining-description-text"}
          descriptionText={"Chapter III"}
          descriptionSubTextClass={"dining-description-sub-text"}
          descriptionSubText={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun"
          }
        />

        <ImageViewContainer
          roomViewClass={"drawing-room-image-container"}
          descriptionViewClass={"drawing-description-view"}
          descriptionTextClass={"drawing-description-text"}
          descriptionText={"Chapter IV"}
          descriptionSubTextClass={"drawing-description-sub-text"}
          descriptionSubText={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun"
          }
        />
      </div>
      <Footer />
    </>
  );
};
