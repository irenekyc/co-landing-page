import React from "react";
import styled from "styled-components";

import Container from "../Layout/Container";
import FlexBox from "../Layout/FlexBox";
import HamburgerIcon from "./bars-solid.svg";

const NavBar = ({ theme }) => {
  const NavBar = styled.nav`
    width: 100vw;
    background: transparent;
    padding: 4rem 0;
    z-index: 10;
  `;

  const Logo = styled.div`
    width: 50px;
  `;

  const NavLinkItems = styled.a`
    color: ${theme.Link};
    margin-right: 2rem;
    z-index: 100;
    position: relative;
    opacity: 0.6;
    &:after {
      position: absolute;
      content: "";
      height: 4px;
      width: 0;
      transition: width 0.5s;
      background: ${theme.blue};
      bottom: -1rem;
      left: 50%;
      transform: translateX(-50%);
    }
    &:hover {
      opacity: 1;
    }

    &:hover:after {
      width: 52px;
    }
    &:last-child {
      margin-right: 0;
    }

    @media (max-width: 768px) {
      display: none;
    }
  `;

  const HamburgerBtn = styled.div`
    @media (max-width: 768px) {
      display: block;
      width: 40px;
      height: 40px;
      color: ${theme.Link};
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 100;
      img {
        width: 60%;
      }
    }
  `;

  const openMobileMenu = () => {
    console.log("click");
  };
  return (
    <NavBar>
      <Container size="wide">
        <FlexBox direction="row" justify="space-between" align="center">
          <Logo>
            <img src="assets/CO.svg" alt="CO Logo" />
          </Logo>
          <HamburgerBtn onClick={openMobileMenu}>
            <img
              src={HamburgerIcon}
              alt="mobile menu button"
              onClick={openMobileMenu}
            />
          </HamburgerBtn>
          <FlexBox direction="row" justify="flex-end" align="center">
            <NavLinkItems as="a" href="#">
              Color Oracle
            </NavLinkItems>
            <NavLinkItems as="a" href="#">
              How To
            </NavLinkItems>
            <NavLinkItems as="a" href="#">
              Manual
            </NavLinkItems>
            <NavLinkItems as="a" href="#">
              {" "}
              Design Tips
            </NavLinkItems>
            <NavLinkItems as="a" href="#">
              {" "}
              Useful Links
            </NavLinkItems>
          </FlexBox>
        </FlexBox>
      </Container>
    </NavBar>
  );
};

export default NavBar;
