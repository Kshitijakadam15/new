import gif from '../Assets/ecdc271c15493d93c9ccc31b848602e9.gif'
const { createTheme } = require("@mui/material");

export const darkTheme = createTheme({  
    palette: {
        mode: "dark",
        primary: {
            main: "#373737"
        },
        secondary: {
            main: "#373737"
        },
        black: {
            main: "#373737"
        },
        background: {
            main: "#373737",
            default: "#373745",
            paper: "#323232"
        },
        textColor: {
            main: "#373737"
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
                }
            `,
        },
    }, 
});
