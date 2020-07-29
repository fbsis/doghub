//import { getErrorMessage } from "../../handlers/responseHandlers";
import * as actionTypes from "./actionsType";

import DogsServices from "../../services/DogsServices";

export const getAllDogs = () => async (dispatch) => {


    let dogs;
    try {
        dogs = await DogsServices.getAllDogs();

        dispatch({
            type: actionTypes.DOGS_LISTS,
            dogs
        });
    } catch (error) {
        //TO-DO colocar erro de arquivo não encontrado
        console.log('get all dogs', error)
    }


};
