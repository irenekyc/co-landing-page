import React from "react";
import styled from "styled-components";

import Container from "../Layout/Container";
import FlexBox from "../Layout/FlexBox";

const Footer = ({ theme }) => {
  const Footer = styled.footer`
    background: ${theme.footerBG};
    padding-top: 4rem;
    padding-bottom: 2rem;
    width: 100%;
  `;

  const FooterContent = styled.div`
    max-width: 350px;
    padding: 1rem;

    h4 {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 11px;
    }
    p {
      font-size: 14px;
      font-weight: 300;
    }
  `;

  const Copyright = styled.p`
    text-align: center;
    color: #13274f;
    opacity: 0.6;
    font-size: 14px;
    margin-top: 4rem;
  `;
  return (
    <Footer>
      <Container size="wide">
        <FlexBox direction="row" justify="space-between" align="flex-start">
          <FooterContent>
            <h4> About</h4>
            <p>
              Development: Bernie Jenny, Monash University, Australia. Ideas,
              testing and icon: Nathaniel Vaughn Kelso, California.
            </p>
          </FooterContent>
          <FooterContent>
            <h4> Feedback</h4>
            <p>
              Color Oracle is a work in progress and will improve with time and
              your input. Please share your Color Oracle testimonial with us and
              send us an email.
            </p>
          </FooterContent>
          <FooterContent>
            {" "}
            <h4>Source</h4>{" "}
            <p>
              Color Oracle is open source, available on GitHub for Mac and
              Windows/Java.
            </p>
          </FooterContent>
        </FlexBox>
        <Copyright>
          © 2006–2018 by Bernie Jenny, Monash University, Melbourne, Australia.
          Last site update: 5 May 2018.
        </Copyright>
      </Container>
    </Footer>
  );
};

export default Footer;
