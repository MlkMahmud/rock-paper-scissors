import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Header from './header';
import Main from './main';
import RulesBtn from './misc/RulesBtn.jsx';
import './App.scss';

const Modal = React.lazy(() => import('./misc/RulesModal.jsx'));

export default () => (
  <Provider store={store}>
    <Header />
    <Main />
    <RulesBtn />
    <React.Suspense fallback={null}>
      <Modal />
    </React.Suspense>
  </Provider>
);

