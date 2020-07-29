import * as actionTypes from "./actionsType";

const INITIAL_STATE = {
    dogs: []
};

// reducers
export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case actionTypes.DOGS_LISTS:
            return {
                ...state,
                dogs: action.dogs
            };


        default:
            return state;
    }
}
