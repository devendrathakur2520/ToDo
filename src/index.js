import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/index';
import {Provider} from 'react-redux';
//import UseHooks from './hooks';
//import HooksCounter from './HooksCounter';
//import UsingRouter from './Rauting';
//import Reduce from './reduce.js';
//import Purecomponents from './pureComponents.js'
//import Form from './form';
//import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(
  <React.StrictMode>
  <Provider store= {store}>
    <App />
    </Provider>
  
  </React.StrictMode>
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
