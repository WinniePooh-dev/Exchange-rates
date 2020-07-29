import React, { useState, useEffect } from 'react';
import { Loading } from '../Loader';

import './style.scss';

export const Form = valute => {

    const [value, setValue] = useState('');

    useEffect(() => {
        if (valute) {
            setValue(valute.Nominal)
        }
    }, [valute])

    if (!valute) {
        return <Loading/>
    }

    const handleChange = e => {
        let value = +e.target.value
        if ((/\d+/g).test(value)) {
            setValue(value)
        }
    }
    
    return (
        <form>
            <input value={value} onChange={handleChange} type='text'/>
            <button>{valute.CharCode}</button>
            <span>{valute.Name}</span>
            {valute.CharCode === 'USD' ? ' \u0024' : ' \u20AC'}
        </form>
    )
}