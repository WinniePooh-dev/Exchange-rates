import React, { useEffect, useState } from 'react';
import Api from '../../api';
import { useDispatch, useSelector } from 'react-redux';
import { getUSD, getEUR } from '../../store/actions';
import { Form } from '../Form';

import './style.scss';


const App = () => {

    const dispatchUSD = useDispatch()
    const dispatchEUR = useDispatch()

    const [selected, setSelected] = useState({});

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

    useEffect(() => {
        if(USD) {
            setSelected(USD)
        }
    }, [USD])
    
    return <div className={'main-frame'}>
        <div>
            {selected.Value}
        </div>
        <div onClick={() => setSelected(USD)}>
            <Form {...USD}/>
        </div>
        <div onClick={() => setSelected(EUR)}>
            <Form {...EUR}/>
        </div>
    </div>
}

export default App;