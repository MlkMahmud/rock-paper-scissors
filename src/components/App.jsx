import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Header from './Header';
import './App.scss';


export default () => (
  <Provider store={store}>
    <Header />
  </Provider>
);
