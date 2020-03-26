// import React from "react";
import changattf from "../fonts/Changa-Regular.ttf";
import tajwalttf from "../fonts/Tajawal-Regular.ttf";
import cairottf from "../fonts/Cairo-Regular.ttf";
import { green, orange } from "@material-ui/core/colors";

const changa = {
  fontFamily: "Changa",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
        local('Changa'),
        local('Changa-Regular'),
        url(${changattf}) format('truetype')
      `
};
const tajwal = {
  fontFamily: "Tajawal",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
        local('Tajawal'),
        local('Tajawal-Regular'),
        url(${tajwalttf}) format('truetype')
      `
};

const cairo = {
  fontFamily: "Cairo",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
        local('Cairo'),
        local('Cairo-Regular'),
        url(${cairottf}) format('truetype')
      `
};
let themeObject = {
  typography: {
    fontFamily: [
      "Changa",
      "Tajawal",
      "Cairo",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      "sans-serif"
    ].join(",")
  },

  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [cairo]
      }
    }
  },
  
};

export default themeObject;
