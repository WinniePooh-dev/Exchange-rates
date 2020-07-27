import React from 'react';
import { Loading } from '../Loader';

import './style.scss';

export const Form = valute => {

    if (!valute) {
        return <Loading/>
    }
    
    return (
        <form>
            <input/>
            <button>{valute.CharCode}</button>
            <span>{valute.Name}</span>
            {valute.CharCode === 'USD' ? ' \u0024' : ' \u20AC'}
        </form>
    )
}