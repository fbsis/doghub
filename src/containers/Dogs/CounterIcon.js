import React from "react";
import { IconButton } from "@material-ui/core";
import { Badge } from '@material-ui/core';
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import StorefrontIcon from '@material-ui/icons/Storefront';

function StoreCounterIcon() {
    const { adopt } = useSelector((state) => state.dogs);

    const history = useHistory();
    
    const handlerClick = () => {
        history.push(`/adoper`);
    }

    return (
        <IconButton color="inherit" onClick={() => handlerClick()}>
            <Badge badgeContent={adopt.length}
                color="secondary"><StorefrontIcon />
            </Badge>
        </IconButton>
    );
}

export default StoreCounterIcon;
