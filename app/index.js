import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './component/Hello/hello';

const appNode = document.createElement('div');
// appNode.className = styles.app;
appNode.id = 'app';

document.body.appendChild(appNode);
ReactDOM.render(<Hello/>, appNode);
