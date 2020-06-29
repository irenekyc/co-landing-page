import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { theme } from "./theme";

import NavBar from "./components/NavBar";
import HeroContent from "./components/HeroContent";
import Footer from "./components/Footer";

function App() {
  const Hero = styled.section`
    width: 100%;
    min-height: 100vh;
    position: relative;
    overflow: hidden;
    background: ${theme.bg};

    @media (max-width: 1024px) {
      min-height: 130vh;
    }
    @media (max-width: 768px) {
      min-height: 200vh;
    }
  `;
  const HeroBG = styled.div`
    position: absolute;
    content: " ";
    width: 100%;
  `;

  const HeroBGUnder = styled(HeroBG)`
    background: url("assets/Vector 1.svg") no-repeat;
    background-size: cover;
    background-position: bottom center;
    height: 250px;
    top: -100px;
    left: 0;
  `;

  const HeroBGUp = styled(HeroBG)`
    background: url("assets/Vector 2.svg") no-repeat;
    background-size: cover;
    background-position: bottom center;
    height: 289px;
    top: -150px;
    left: 90px;
  `;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Hero>
        <HeroContent theme={theme} />
        <NavBar theme={theme} />
        <HeroBGUnder id="under" />
        <HeroBGUp id="upperbg" />
      </Hero>
      <Footer theme={theme} />
    </ThemeProvider>
  );
}

export default App;
