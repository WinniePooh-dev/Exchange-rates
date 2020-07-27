import React from 'react';

import './style.scss';

export const Form = valute => {

    if (!valute) {
        return <div>Loading...</div>
    }
    
    return (
        <form>
            <input/>
            <button>{valute.CharCode}</button>
            <span>{valute.Name}</span>
        </form>
    )
}