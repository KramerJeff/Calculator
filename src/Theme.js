import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    base: "rgba(50, 30, 0, 0.8)",
    accent: "#ff9f0c",
    secondary: "rgba(50, 30, 0, 0.6)",
    button: "rgba(50, 30, 0, 0.4)",
    font: "white"
  }
};

const myTheme = {
  colors: {
    base: "#3C2601",
    accent: "#ff9f0c",
    secondary: "#7D6E5A",
    button: "#9E9283",
    font: "white"
  }
}

const alternateTheme = {
  colors: {
    base: "rgba(0, 0, 0, 0.7)",
    accent: "#cc0000",
    secondary: "rgba(0, 0, 0, 0.4)",
    button: "rgba(0, 0, 0, 0.2)",
    font: "black"
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={myTheme}>{children}</ThemeProvider>
);

export default Theme;
