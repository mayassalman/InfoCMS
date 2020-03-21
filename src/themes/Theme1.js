// import React from "react";
import changattf from "../fonts/Changa-Regular.ttf";
import { green, orange } from '@material-ui/core/colors';

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
let themeObject={
 
  palette: {
    type: 'dark',
    primary: {
      main: "#ff4400"
    },
    secondary: {
      light: "#e91e63",
      main: "#0044ff",
      contrastText: "#00cc00"
    },
    contrastThreshold: 3,
    tonalOffset: 0.2
  },
  typography: {
  
    button: {
      
      background: "linear-gradient(135deg, #ff4400 5%, #0066ff 5%)",
      // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      color: "white"
    },
    
    h6: {
      fontSize: "2rem"
    },
    body2: {
      // float:'left',
    },
   
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
        "@font-face": [changa]
      }
    }
  },
  direction: "rtl"
}

export default themeObject;
