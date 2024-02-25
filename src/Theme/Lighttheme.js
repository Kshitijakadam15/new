import gif from '../Assets/92dc13df1f31754c07becfe13714288c.gif';
const { createTheme } = require("@mui/material");


export const lightTheme =createTheme({  
    palette:{
        mode:"dark",
        primary:{
            main:"#FFFFFF"
        },
        secondary:{
            main:"#FFFFFF"
        },
        black:{
            main:"#FFFFFF"
        },
        background:{
            main:"#FFFFFF",
            default:"#FFFFFF",
            paper:"#FFFFFF"
        },
        textColor:{
            main:"#FFFFFF"
        }
    },
    components: {
        MuiCssBaseline: {
          styleOverrides: `
          body {
            background-image: url(${JSON.stringify(gif)});
            background-size: cover;
            background-repeat: no-repeat;
            background-attachment: fixed;
        }`,
        },
      }, 
})