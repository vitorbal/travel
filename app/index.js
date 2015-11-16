import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './component/app/app';

const appNode = document.createElement('div');
appNode.id = 'app';

document.body.appendChild(appNode);
ReactDOM.render(<App />, appNode);
