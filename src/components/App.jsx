import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Header from './header';
import Screen from './screen';
import Modal from './misc/RulesModal';
import './App.scss';

export default () => (
  <Provider store={store}>
    <Header />
    <Screen />
    <Modal />
  </Provider>
);

