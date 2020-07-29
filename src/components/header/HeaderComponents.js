import React from "react";

import {AppBar, makeStyles, Toolbar} from "@material-ui/core";

import LogoComponents from "../LogoComponents/LogoComponents";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1
    },
    logoFirstPart: {
        fontSize: 24
    },
    logoSecondPart: {
        fontSize: 24,
        fontWeight: "bold"
    },
    itemRight: {
        marginLeft: "auto",
    }
}));


function HeaderComponents(props) {
    const classes = useStyles();

    return (
        <span className={
            classes.root
        }>
            <AppBar position="static"
                className={
                    classes.AppBar
            }>
                <Toolbar className={
                    classes.Toolbar
                }>
                    <LogoComponents/>
                    <section className={
                        classes.itemRight
                    }>
                        {
                        props.right
                    } </section>
                </Toolbar>
            </AppBar>
        </span>
    );
}

export default HeaderComponents;
