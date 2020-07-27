import React, { useEffect } from 'react';
import Api from '../../api';

const App = () => {

    useEffect(() => {
        Api.getCurrency().then(data => console.log(data))
    }, [])
    
    return <div>dscks</div>
}

export default App;