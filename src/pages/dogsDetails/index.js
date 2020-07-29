import React from "react";

import CounterIcon from "../../containers/Dogs/CounterIcon";
import DetailDogCard from "../../containers/Dogs/DetailDogCard";
import AplicationComponents from "../../components/AplicationComponents"


function DogsDetails(props) {

    return (
        <AplicationComponents title="Detalhes"
            header={
                {
                    right: (
                        <CounterIcon />
                    )
                }
            }>
            <DetailDogCard/>

        </AplicationComponents>
    );
}

export default DogsDetails;
