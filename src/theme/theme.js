import {createTheme} from "@mui/material";
import heboRegulartTtf from "../utils/fonts/Heebo-Regular.ttf";
import heboLightTtf from "../utils/fonts/Heebo-Light.ttf";
import heboBoldTtf from "../utils/fonts/Heebo-Bold.ttf";

export const themeColors = {
    bg: "#f8fade",
    bgTitle: "#f1fade",

};
export const theme = createTheme({
    direction:'rtl',
    typography: {
        fontFamily: 'Hebo, Arial',
    },

    components: {
        MuiCssBaseline: {
            styleOverrides: `
        @font-face {
          font-family: 'Hebo';
          font-style: normal;
          font-weight: 400;
          src: local('Hebo'), local('Hebo-Regular'), url(${heboRegulartTtf}) format('ttf');
        }
        @font-face {
          font-family: 'Hebo';
          font-style: normal;
          font-weight: 300;
          src: local('Hebo Light'), local('Hebo-Light'), url(${heboLightTtf}) format('ttf');
        }
        @font-face {
          font-family: 'Hebo';
          font-style: normal;
          font-weight: 700;
          src: local('Hebo Bold'), local('Hebo-Bold'), url(${heboBoldTtf}) format('ttf');
        }
      `,
        },
        MuiTypography: {
            styleOverrides: {
                h1: {
                    fontWeight: 700,
                    fontSize: "72px",},
                h2: {
                    fontWeight: 700,
                    fontSize: "20px",},
                p:{
                    fontWeight: 400,
                    fontSize: "16px",
                },
            },
        },
        TableCell:{
            fontWeight: 700,
        },
    }
})
