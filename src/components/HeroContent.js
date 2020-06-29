import React from "react";
import styled from "styled-components";

import FlexBox from "../Layout/FlexBox";

const HeroContent = () => {
  const ContentContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100%;
  `;

  const HeroHeading = styled.h1`
    font-size: 36px;
    margin-bottom: 1rem;
    font-weight: 500;
  `;

  const HeroText = styled.p`
    font-size: 20px;
    line-height: 1.2;
    margin-bottom: 3rem;
    font-weight: 100;
    width: 70%;
    text-align: stretch;
    margin: 0 auto;
  `;

  return (
    <ContentContainer>
      <HeroHeading>Design for the color impaired</HeroHeading>
      <HeroText>
        Color Oracle is a free color blindness simulator for Windows, Mac and
        Linux. It takes the guesswork out of designing for color blindness by
        showing you in real time what people with common color vision
        impairments will see.
      </HeroText>

      <FlexBox
        direction="row"
        justify="space-between"
        align-items="center"
      ></FlexBox>
    </ContentContainer>
  );
};

export default HeroContent;
