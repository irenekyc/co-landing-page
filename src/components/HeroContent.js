import React from "react";
import styled from "styled-components";

import FlexBox from "../Layout/FlexBox";
import Container from "../Layout/Container";
import { DownloadData } from "../data";

const HeroContent = ({ theme }) => {
  console.log(DownloadData);
  const ContentContainer = styled.div`
    padding-top: 8rem;
    padding-bottom: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100%;
    z-index: 100;

    @media (max-width: 768px) {
      min-height: 120vh;
    }
    @media (max-width: 500px) {
      min-height: 150vh;
    }
  `;

  const HeroHeading = styled.h1`
    font-size: 36px;
    margin-bottom: 1rem;
    font-weight: 500;
    padding: 0 2rem;
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

  const Box = styled.div`
    cursor: pointer;
    margin-top: 3rem;
    padding: 2rem 3rem;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 24px;
    max-width: 320px;
    box-shadown: 1px 1px 2px rgba(0, 0, 0, 0.1);
    margin-left: auto;
    margin-right: auto;
    img {
      width: 75px;
    }

    &:hover {
      transform: scale(1.1);
    }
  `;

  const DownloadButton = styled.button`
    border: 1px solid ${theme.secondaryText};
    border-radius: 5px;
    font-size: 18px;
    margin: 18px 0;
    color: ${theme.secondaryText};
    background: transparent;
    width: 250px;
    height: 60px;
    line-height: 60px;
    font-family: inherit;

    ${Box}:hover & {
      background: ${theme.blue};
      color: white;
      border: none;
    }
  `;

  const Remarks = styled.p`
    font-size: 14px;
    color: #6d7593;
  `;

  return (
    <ContentContainer>
      <HeroHeading>Design for the color impaired.</HeroHeading>
      <HeroText>
        Color Oracle is a free color blindness simulator for Windows, Mac and
        Linux. It takes the guesswork out of designing for color blindness by
        showing you in real time what people with common color vision
        impairments will see.
      </HeroText>
      <Container size="narrow">
        <FlexBox direction="row" justify="space-between" align-items="center">
          {DownloadData.map((e) => {
            return (
              <Box key={e.id}>
                <div>
                  <img src={`assets/${e.img}`} alt={e.title} />
                </div>
                <div>
                  {" "}
                  <DownloadButton> Download for {e.title}</DownloadButton>
                </div>
                <Remarks>{e.remarks}</Remarks>
              </Box>
            );
          })}
        </FlexBox>
      </Container>
    </ContentContainer>
  );
};

export default HeroContent;
