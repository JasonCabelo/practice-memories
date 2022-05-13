import React from "react";
import  ReactDOM  from "react-dom";
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import {  applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from "./reducers";
import './index.css'
const store = configureStore({reducer: reducers}, compose(applyMiddleware(thunk)));
ReactDOM.render
    (
    < Provider store={store}  >
        <App />    
     </ Provider >,document.getElementById('root'));
