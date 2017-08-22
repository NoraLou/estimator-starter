import React from 'react';
         
import ReactDOM from 'react-dom';
import App from './comp/App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './Index.css';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
registerServiceWorker();
