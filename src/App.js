import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { theme } from "./theme";

import NavBar from "./components/NavBar";
import HeroContent from "./components/HeroContent";

function App() {
  const Hero = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;
    z-index: 1;
    overflow: hidden;
  `;
  const HeroBG = styled.div`
    position: absolute;
    content: " ";
    width: 100%;
    height: 100%;
    z-index: 2;
  `;

  const HeroBGUnder = styled(HeroBG)`
    background: url("assets/Vector 1.svg") no-repeat;
    background-size: contain;
    background-position: top;
    top: -50px;
    left: 0;
  `;

  const HeroBGUp = styled(HeroBG)`
    background: url("assets/Vector 2.svg") no-repeat;
    background-size: contain;
    background-position: top;
    top: -50px;
    left: 90px;
  `;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Hero>
        <HeroBGUnder id="under" />
        <HeroBGUp id="upperbg" />
        <HeroContent />
        <NavBar theme={theme} />
      </Hero>
    </ThemeProvider>
  );
}

export default App;
