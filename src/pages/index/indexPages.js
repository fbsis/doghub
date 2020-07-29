import React from "react";

import CounterIcon from "../../containers/Dogs/CounterIcon";
import AplicationComponents from "../../components/AplicationComponents"

import ListingDogs from "../../containers/Dogs/ListingDogs";

function IndexPages() {
    return (
        <AplicationComponents title="Para adoção"
            header={
                {
                    right: (
                        <CounterIcon />
                    )
                }
            }>
            <ListingDogs />

        </AplicationComponents>
    );
}

export default IndexPages;
