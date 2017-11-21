import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import './css/index.css';

const rootEl = document.getElementById('root');

function render() {
  ReactDOM.render(
    <App name="Dojo Bali" />,
    rootEl
  );
}

render();
