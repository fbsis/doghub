import React from "react";

import CounterIcon from "../../containers/Dogs/CounterIcon";
import AplicationComponents from "../../components/AplicationComponents"

import AdoperList from "../../containers/Dogs/AdoperList";

function IndexPages() {
    return (
        <AplicationComponents title="Sua lista de adoração"
            header={
                {
                    right: (
                        <CounterIcon />
                    )
                }
            }>
            <AdoperList />

        </AplicationComponents>
    );
}

export default IndexPages;
