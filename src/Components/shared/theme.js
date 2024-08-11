import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    fonts: {
        basic: "space grotesk, sans-serif",
    },
    colors: {
        background: "#ffffff",
        footer: "#430f5a",
    heroGradient: "#ff6c75",
    heroBackground: "##7401a7",
    heroBackgroundStart: "#340000",
    heroBackgroundEnd: "##7401a7",
    primary: "#000000",
    secondary: "#ffffff",
    accent: "#555555",
    sidebar:"#ffffff",
    network: "#7401a7",
    networkLight: "#e3f2fd",
    lightGray: "#f6f6f6",
    leaderBoardBackground:"#f6f6f6",
    gray: "#dddddd",
    darkGray: "#505050",
    buttonColor:"#5691fe",
    outlineColor:"#ffffff",
    collectionCardBg:"#f3f3f3",
    datePicker:" #f2f7fa"
    }, 
    small_width: "768px",
    medium_width: "968px",
    max_width: "1280px",
}

export const darkTheeme = {
    fonts: {
        basic: "space grotesk, sans-serif",
      },
      colors: {
        background: "#000000",
        footer: "#1C1C1D",
        heroGradient: "#000000",
        heroBackground: "#282828",
        heroBackgroundStart: "#282828",
        heroBackgroundEnd: "#282828",
        sidebar:"#282828",
        primary: "#ffffff",
        secondary: "#1C1C1D",
        accent: "#bbbbbb",
        network: "#ffffff",
        networkLight: "#282828",
        lightGray: "#282828",
        leaderBoardBackground:"#100f0f",
        gray: "#606060",
        darkGray: "#505050",
        buttonColor:"#ffffff",
        outlineColor:"#5691fe",
        collectionCardBg:"#1C1C1D",
        datePicker:"#ffffff"
      },
      small_width: "768px",
      medium_width: "968px",
      max_width: "1280px",
}

export const GlobalStyle = createGlobalStyle`
body{
margin: 0;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
overflow-y: overlay;
color: ${({theme}) => theme.colors.primary};
background: ${({theme}) => theme.colors.background};
}
*,
*::after,
*::before{
    font-family: ${({theme}) => theme.fonts.basic};
    box-sizing: border-box;
} 
h1, h2, h3, h4, h5, h6 {margin: 0;}
a{
    text-decoration: none;
    color: ${({theme}) => theme.colors.accent};
    cursor: pointer;
}
a:hover{
    color: ${({theme}) => theme.colors.primary};
    text-decoration: none;
    cursor: pointer;
}
.main{
    padding: 100px 0 0;
    min-height: calc(100vh -316px);
    @media (min-width: ${(props) => props.theme.small_width}) {
        padding: 80px 0 0;
        min-height: calc(100vh -247px);
        
    }
}
.banner{
    padding: 0 0 0;
}

`