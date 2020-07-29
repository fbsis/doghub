import React from "react";
import { IconButton } from "@material-ui/core";
import { Badge } from '@material-ui/core';


import StorefrontIcon from '@material-ui/icons/Storefront';

function StoreCounterIcon() {
    return (
        <IconButton color="inherit" aria-label="More Options">
            <Badge badgeContent={4}
                color="secondary"><StorefrontIcon />
            </Badge>

        </IconButton>
    );
}

export default StoreCounterIcon;
