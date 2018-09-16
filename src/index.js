import React from 'react';
import ReactDOM from 'react-dom';
import "./Public/Styles/index.css";
import Client from './Frontend/Client';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Client />, document.getElementById('root'));
registerServiceWorker();
