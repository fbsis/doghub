import * as actionTypes from "./actionsType";

const INITIAL_STATE = {
    dogs: [],
    dog: {},
    adopt: []
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
        case actionTypes.DOG_ADOPT_INSERT:
            return {
                ...state,
                adopt: state.adopt.concat(action.dogAdopt)
            };
        case actionTypes.DOG_ADOPT_REMOVE:
            let newAdopt = state.adopt.filter(item => item !== action.dogAdopt);

            console.log(newAdopt);
            return {
                ...state,
                adopt: newAdopt
            };
        default:
            return state;
    }
}
