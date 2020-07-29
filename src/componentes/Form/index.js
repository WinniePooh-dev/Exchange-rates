import React, { useState, useEffect } from 'react';
import { Loading } from '../Loader';
import { getRUB } from '../../store/actions';
import { useDispatch } from 'react-redux';

import './style.scss';

export const Form = ({valute, setCount}) => {

    const dispatch = useDispatch();

    const [value, setValue] = useState('');

    useEffect(() => {
        if (valute) {
            setValue(valute.Nominal)
            setCount(valute.Nominal)
            dispatch(getRUB(valute))
        }
    }, [valute, dispatch, setCount])

    if (!valute) {
        return <Loading/>
    }

    const handleChange = e => {
        let value = +e.target.value
        if ((/\d+/g).test(value)) {
            setValue(value)
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        setCount(value)
    }
    
    return (
        <div onClick={() => {
            dispatch(getRUB((valute)));
            setCount(value)
        }}>
            <form onSubmit={handleSubmit}>
                <input value={value} onChange={handleChange} type='text'/>
                <button type='submit'>{valute.CharCode}</button>
                <span>{valute.Name}</span>
                {valute.CharCode === 'USD' ? ' \u0024' : ' \u20AC'}
            </form>
        </div>
    )
}