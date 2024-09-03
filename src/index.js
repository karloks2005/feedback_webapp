import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,  //Strict mode samo provjerava ako je sve u redu
    document.getElementById('root')
);