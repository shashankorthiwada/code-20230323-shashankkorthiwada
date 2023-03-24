import React from "react";
import styled from "styled-components";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
`;

const LinkItem = styled.li`
  width: 104px;
  top: 31px;
  font-family: Exo 2;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 110%;
  /* or 22px */
  text-align: center;
  color: #ffffff;
  height: 100%;
  padding: 0 1.1em;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;

  &:hover {
    border-top: 2px solid #2ecc71;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

export function NavLinks(props) {
  return (
    <NavLinksContainer>
      <LinksWrapper>
        <LinkItem>
          <Link href="#">Explore</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">About Us</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">Cities</Link>
        </LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  );
}
