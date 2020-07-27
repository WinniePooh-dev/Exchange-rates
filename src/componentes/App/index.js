import React, { useEffect } from 'react';
import Api from '../../api';
import { useDispatch, useSelector } from 'react-redux';
import { getUSD, getEUR } from '../../store/actions';
import { Form } from '../Form';

import './style.scss';


const App = () => {

    const dispatchUSD = useDispatch()
    const dispatchEUR = useDispatch()

    useEffect(() => {
        Api.getCurrency().then((data) => {
            return data.Valute
        }).then(({USD, EUR}) => {
            console.log(USD)
            dispatchUSD(getUSD(USD))
            dispatchEUR(getEUR(EUR))
        })
    }, [dispatchEUR, dispatchUSD])

    const USD = useSelector(state => state.currencyReducer.USD);
    const EUR = useSelector(state => state.currencyReducer.EUR);
    
    return <div className={'main-frame'}>
        <Form {...USD}/>
        <Form {...EUR}/>
    </div>
}

export default App;