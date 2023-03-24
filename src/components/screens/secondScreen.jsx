import React from "react";
import styled from "styled-components";

const HeaderText = styled.h1`
  position: absolute;
  width: 234px;
  height: 70px;
  left: 69px;
  top: 79px;
  font-family: Exo 2;
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 110%;
  /* or 70px */
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
`;

const SubText = styled.div`
  position: absolute;
  width: 300px;
  height: 40px;
  left: 56px;
  top: 200px;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 110%;
  /* or 20px */
  display: flex;
  align-items: center;
  color: #000000;
`;

const RoomViewContainer = styled.div`
  position: absolute;
  width: 500px;
  height: 300px;
  top: 270px;
  border-radius: 25px;
`;

const DimensionsContainer = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 424px;
  height: 100px;
  top: 520px;
  background: linear-gradient(
    94.33deg,
    rgba(255, 255, 255, 0.6) 3.19%,
    rgba(255, 255, 255, 0.1) 99.26%
  );
  backdrop-filter: blur(5px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 15px;
`;

const RoomDescriptionText = styled.div`
  position: absolute;
  width: 300px;
  height: 20px;
  top: 542px;

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

const RoomPillContainer = styled.div`
  position: absolute;
  background: linear-gradient(90deg, #ff594c 0%, #fac527 100%);
  border-radius: 10px;
`;

const RoomDetailsText = styled.div`
  position: absolute;
  height: 20px;

  font-family: Ubuntu;
  font-style: normal;

  font-size: 18px;
  line-height: 110%;
  /* identical to box height, or 20px */
  display: flex;
  align-items: center;
  color: #000000;
`;

const ItemViewContainer = ({
  roomDescription,
  priceText,
  dimensions,
  roomViewClass,
  dimensionsViewClass,
  roomDescriptionClass,
  pricePillClass,
  dimensionPillClass,
  bookPillClass,
  priceTextClass,
  dimensionTextClass,
  bookTextClass,
}) => {
  return (
    <>
      <RoomViewContainer className={roomViewClass} />
      <DimensionsContainer className={dimensionsViewClass} />
      <RoomDescriptionText className={roomDescriptionClass}>
        {roomDescription}
      </RoomDescriptionText>
      <RoomPillContainer className={pricePillClass} />
      <RoomPillContainer className={dimensionPillClass} />
      <RoomPillContainer className={bookPillClass} />
      <RoomDetailsText className={priceTextClass}>{priceText}</RoomDetailsText>
      <RoomDetailsText className={dimensionTextClass}>
        {dimensions}
      </RoomDetailsText>
      <RoomDetailsText className={bookTextClass}>Book!</RoomDetailsText>
    </>
  );
};

export const SecondScreen = () => {
  return (
    <>
      <HeaderText>Explore</HeaderText>
      <SubText>
        From one-guest rooms to penthouses with pools and gardens
      </SubText>
      <div style={{ display: "flex" }}>
        <ItemViewContainer
          roomViewClass={"bed-room-image-container"}
          roomDescriptionClass={"bed-room-description-text"}
          dimensionsViewClass={"bed-room-dimension"}
          roomDescription={"Room with one king-size bed"}
          priceText={"35$"}
          dimensions={"28м²"}
          pricePillClass={"bed-room-price-pill"}
          dimensionPillClass={"bed-room-dimension-pill"}
          bookPillClass={"bed-room-book-pill"}
          priceTextClass={"bed-room-price-text"}
          dimensionTextClass={"bed-room-dimension-text"}
          bookTextClass={"bed-room-book-text"}
        />
        <ItemViewContainer
          roomDescription={"Penthouse for 8 person"}
          roomDescriptionClass={"living-room-description-text"}
          roomViewClass={"living-room-image-container"}
          dimensionsViewClass={"living-room-dimension"}
          pricePillClass={"living-room-price-pill"}
          dimensionPillClass={"living-room-dimension-pill"}
          bookPillClass={"living-room-book-pill"}
          priceTextClass={"living-room-price-text"}
          priceText={"2039$"}
          dimensionTextClass={"living-room-dimension-text"}
          dimensions={"438м²"}
          bookTextClass={"living-room-book-text"}
        />
      </div>
    </>
  );
};
