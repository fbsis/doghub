import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {

    getAllDogs
} from "./../../store/dogs/actions";


import DetailsDog from "./DetailsDogCard";


function ListingDogs() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllDogs());
    }, [dispatch]);

    const {
        dogs
    } = useSelector((state) => state.dogs);

    return (
        <React.Fragment>
            {dogs.map((value) => <DetailsDog {...value} key={value.id} />)}
        </React.Fragment>
    );
}

export default ListingDogs;
