import * as actionTypes from "./actionsType";

const INITIAL_STATE = {
    dogs: [],
    dog: {}
};

// reducers
export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case actionTypes.DOGS_LISTS:
            return {
                ...state,
                dogs: action.dogs
            };
            case actionTypes.DOG_DETAIL:
                return {
                    ...state,
                    dog: action.dog
                };

        default:
            return state;
    }
}
