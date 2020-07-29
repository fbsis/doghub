// BackButton.js

import React from 'react'
import { IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { withRouter, useHistory } from 'react-router'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: "#FFF"
    },
    title: {
        flexGrow: 1,
    },
}));

function BackButton({ history: { goBack }, children, ...props }) {
    const classes = useStyles();
    const history = useHistory();

    if (history.location.pathname === "/"){
        return null;
    }
        

    console.log(props);
    return (
        <IconButton edge="start" color="inherit" className={classes.menuButton} {...props} onClick={goBack}>
            <ArrowBackIcon />
        </IconButton>
    )
}

export default withRouter(BackButton)