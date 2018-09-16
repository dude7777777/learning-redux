import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import Client from './Frontend/Client';
import registerServiceWorker from './registerServiceWorker';
import store from './Frontend/Store';

const root = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <Client />
    </Provider>,
    root);

registerServiceWorker();
