import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import App from './ValidarTelefono';
// import App from './ValidarDatos';
// import App from './MapaGoogle';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( < App / > , document.getElementById('root'));
registerServiceWorker();
