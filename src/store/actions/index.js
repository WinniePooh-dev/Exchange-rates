import * as actionTypes from '../actionTypes';

export const getUSD = USD => {
    return {
        type: actionTypes.GET_USD,
        payload: USD
    }
}

export const getEUR = EUR => {
    return {
        type: actionTypes.GET_EUR,
        payload: EUR
    }
}

export const getRUB = RUB => {
    return {
        type: actionTypes.GET_RUB,
        payload: RUB
    }
}