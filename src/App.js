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
    min-height: 120vh;
    position: relative;
    overflow: hidden;
    background: ${theme.bg};
  `;
  const HeroBG = styled.div`
    position: absolute;
    content: " ";
    width: 100%;
    height: 100%;
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
