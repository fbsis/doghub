import React from "react";

import { makeStyles } from '@material-ui/core/styles';

import { CssBaseline, Container, Typography } from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import HeaderComponents from "../components/header/HeaderComponents";


const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#9e9e9e"
        },
        background: {
            default: "#eeeeee"
        }
    }
});

const useStyles = makeStyles({
    title: {
        paddingTop: 10,
        color: "#6C6C6C",
        fontWeight: "bold",
    }
});

function AplicationComponents(props) {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <HeaderComponents {...props.header} />
            <CssBaseline />
            <Container >
                <Typography variant="h6" align="center" className={classes.title}>
                    {props.title}
                </Typography>
                {props.children}
            </Container>
        </ThemeProvider>
    );
}

export default AplicationComponents;
