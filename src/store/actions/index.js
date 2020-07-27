import * as actionTypes from '../actionTypes';

export const getUSD = USD => {
    return {
        type: actionTypes.GET_USD,
        payload: USD
    }
}