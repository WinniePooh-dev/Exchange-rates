import React, { useEffect, useState } from 'react';
import Api from '../../api';
import { useDispatch, useSelector } from 'react-redux';
import { getUSD, getEUR } from '../../store/actions';
import { Form } from '../Form';

import './style.scss';


const App = () => {

    const dispatchUSD = useDispatch();
    const dispatchEUR = useDispatch();

    const [selected, setSelected] = useState([]);
    const [count, setCount] = useState(0);

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
    const RUB = useSelector(state => state.currencyReducer.RUB);
    
    return <div className={'main-frame'}>
        <div className={'main-valute'}>
            {RUB && `${(RUB.Value*count).toFixed(2)} \u20BD`}
        </div>
        <Form valute={USD} setCount={setCount}/>
        <Form valute={EUR} setCount={setCount}/>
    </div>
}

export default App;