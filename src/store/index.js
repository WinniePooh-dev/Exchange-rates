import { createStore, combineReducers, applyMiddleware } from "redux";
import { currencyReducer } from './reducers/currency';
import thunk from "redux-thunk";

const reducer = combineReducers({
    currencyReducer
})

export default createStore(reducer, applyMiddleware(thunk));