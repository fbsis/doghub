import React from "react";

import CounterIcon from "../../containers/Dogs/CounterIcon";
import AplicationComponents from "../../components/AplicationComponents"


function DogsDetails() {
    return (
        <AplicationComponents title="Para adoção"
            header={
                {
                    right: (
                        <CounterIcon />
                    )
                }
            }>
            detalhes

        </AplicationComponents>
    );
}

export default DogsDetails;
