import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    logoFirstPart: {
        fontSize: 24,
        color: "#FFF"
    },
    logoSecondPart: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#FFF"
    },
}));

function LogoComponents() {
    const classes = useStyles();

    return (
        <>
            <Typography className={
                classes.logoFirstPart
            }>
                Dog
        </Typography>
            <Typography className={
                classes.logoSecondPart
            }>
                Hub
        </Typography>
        </>
    );
}

export default LogoComponents;
