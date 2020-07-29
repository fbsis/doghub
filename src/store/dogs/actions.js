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

export const getDog = (id) => async (dispatch) => {
    try {
        let dog = await DogsServices.getDog(id);

        dispatch({
            type: actionTypes.DOG_DETAIL,
            dog
        });
    } catch (error) {
        //TO-DO colocar erro de arquivo não encontrado
        console.log('get dog', error)
    }


};

export const adopt = (dog) => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.DOG_ADOPT_INSERT,
            dogAdopt: dog
        });
    } catch (error) {
        //TO-DO colocar erro de arquivo não encontrado
        console.log('adopt dog', error)
    }


};


export const adopt_remove = (dog) => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.DOG_ADOPT_REMOVE,
            dogAdopt: dog
        });
    } catch (error) {
        //TO-DO colocar erro de arquivo não encontrado
        console.log('adopt dog', error)
    }


};