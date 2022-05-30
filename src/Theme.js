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

const alternateTheme = {
  colors: {
    base: "rgba(0, 0, 0, 0.5)",
    accent: "#cc0000",
    secondary: "rgba(0, 0, 0, 0.3)",
    button: "rgba(0, 0, 0, 0.1)",
    font: "black"
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={alternateTheme}>{children}</ThemeProvider>
);

export default Theme;
