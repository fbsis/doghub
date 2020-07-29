import React from "react";

import { CssBaseline, Container, Typography } from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import HeaderComponents from "../components/header/HeaderComponents";


const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#9e9e9e"
        }
    }
});

function AplicationComponents(props) {
    return (
        <ThemeProvider theme={theme}>
            <HeaderComponents {...props.header} />
            <CssBaseline />
            <Container maxWidth="sm" style={{backgroundColor: "#eeeeee"}}>
                <Typography variant="h6" align="center">
                    {props.title}
                </Typography>
                {props.children}
            </Container>
        </ThemeProvider>
    );
}

export default AplicationComponents;
