import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './HelloWorld';
import "./index.css";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('root')
);

serviceWorker.unregister();
