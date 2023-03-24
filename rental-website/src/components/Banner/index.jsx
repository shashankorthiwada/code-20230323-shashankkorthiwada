import React from "react";
import styled from "styled-components";
import SearchIcon from "../../Vector.png";

const BannerContainer = styled.div`
  left: 178px;
  position: absolute;
  width: 795px;
  height: 271px;
  top: 120px;
  left: 330px;
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
  font-family: Exo 2;
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
  top: 330px;
  left: 510px;
`;

const FilterContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  position: absolute;
  width: 940px;
  height: 100px;
  background: linear-gradient(
    94.43deg,
    rgba(249, 249, 249, 0.49) 34.95%,
    rgba(249, 249, 249, 0.175) 67.01%
  );
  backdrop-filter: blur(5px);
  border-radius: 30px;
  left: 269px;
  top: 500px;
`;

const FilterElement = styled.div`
  width: 210px;
  height: 70px;
  top: 542px;
  margin: 1rem;
  background: #ffffff;
  border-radius: 16px;
`;

const TextElement = styled.p`
  display: flex;
  margin: 12px;
  align-items: center;
`;

const SearchElement = styled.div`
  display: flex;
  width: 210px;
  height: 70px;
  left: 791px;
  top: 542px;
  margin: 1rem;
  background: linear-gradient(90deg, #ff594c 0%, #fac527 100%);
  border-radius: 16px;
`;

const SearchText = styled.p`
  margin-left: 5rem;
  margin-top: 1.2rem;
  font-weight: 700;
  align-items: center;
  color: #fff;
  font-size: 1.6rem;
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
      <FilterContainer>
        <FilterElement>
          <TextElement>CITY</TextElement>
          <TextElement>Select your city</TextElement>
        </FilterElement>
        <FilterElement>
          <TextElement>DATES</TextElement>
          <TextElement>Select your dates</TextElement>
        </FilterElement>
        <FilterElement>
          <TextElement>GUESTS</TextElement>
          <TextElement>Add guests</TextElement>
        </FilterElement>
        <SearchElement>
          <img
            src={SearchIcon}
            alt="Search Icon"
            style={{
              position: "absolute",
              marginLeft: "3rem",
              marginRight: "1rem",
              marginTop: "1.5rem",
              marginBottom: "1rem",
              width: "1.5rem",
            }}
          />
          <SearchText>Search</SearchText>
        </SearchElement>
      </FilterContainer>
    </>
  );
}
