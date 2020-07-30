import React, { useEffect, useState } from 'react';
import Api from '../../api';
import { useDispatch, useSelector } from 'react-redux';
import { getUSD, getEUR } from '../../store/actions';
import { Form } from '../Form';
import Chart from '../Chart.js';

import './style.scss';

const App = () => {

    const dispatchUSD = useDispatch();
    const dispatchEUR = useDispatch();

    const [selected, setSelected] = useState([]);
    const [count, setCount] = useState(0);

    const [history_USD, setHistoryUSD] = useState([]);
    const [history_EUR, setHistoryEUR] = useState([])

    useEffect(() => {
        Api.getCurrency().then((data) => {
            return data.Valute
        }).then(({USD, EUR}) => {
            dispatchUSD(getUSD(USD))
            dispatchEUR(getEUR(EUR))
        })
    }, [dispatchEUR, dispatchUSD])

    useEffect(() => {
        const interval = setInterval(() => {
            Api.getCurrency().then((data) => {
                return data.Valute
            }).then(({USD, EUR}) => {
                setHistoryEUR(history_EUR => [...history_EUR, {'EUR': EUR.Value}]);
                setHistoryUSD(history_USD => [...history_USD, {'USD': USD.Value}]);
            })
        }, 3000)
        return () => clearInterval(interval);
    }, [dispatchEUR, dispatchUSD]);

    const handleSelectEUR = () => {
        setSelected(history_EUR)
    }

    const handleSelectUSD = () => {
        setSelected(history_USD)
    }

    const USD = useSelector(state => state.currencyReducer.USD);
    const EUR = useSelector(state => state.currencyReducer.EUR);
    const RUB = useSelector(state => state.currencyReducer.RUB);
    
    return <div className={'main-frame'}>
        <div className={'main-valute'}>
            {RUB && `${(RUB.Value*count).toFixed(2)} \u20BD`}
        </div>
        <Form valute={USD} setCount={setCount} handleSelectUSD={handleSelectUSD}/>
        <Form valute={EUR} setCount={setCount} handleSelectEUR={handleSelectEUR}/>
        <Chart data={selected}/>
    </div>
}

export default App;