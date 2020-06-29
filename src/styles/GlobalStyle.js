import { createGlobalStyle } from "styled-components";
import { theme } from "../theme";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box
}
body{
    width:100vw;
    min-height: 100vh;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.2;
    color: #000;
}
a{
    text-decoration: none;
    color: ${theme.inactiveLink}
}
`;

export default GlobalStyle;
