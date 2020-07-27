import * as actionTypes from '../actionTypes';

const initState = {
    USD: null,
    EUR: null,
    RUB: null
};

export const currencyReducer = (state = initState, action) => {
    switch(action.type) {
        case actionTypes.GET_USD: 
        return {
            ...state,
            USD: action.payload
        }
        case actionTypes.GET_EUR: 
        return {
            ...state,
            EUR: action.payload
        }
        case actionTypes.GET_RUB: 
        return {
            ...state,
            RUB: action.payload
        }

        default: return state
    }
}