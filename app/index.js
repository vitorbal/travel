import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './component/app/app';

import './styles.css';

const appNode = document.createElement('div');

document.body.appendChild(appNode);
ReactDOM.render(<App />, appNode);
