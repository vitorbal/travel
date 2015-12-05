import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './component/App/App';

import './styles.css';

const appNode = document.createElement('div');

document.body.appendChild(appNode);
ReactDOM.render(<App />, appNode);
