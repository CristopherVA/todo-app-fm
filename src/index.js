import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import { AppRouter } from './router/AppRouter';
import { store } from './redux/store/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
      <AppRouter />
  </Provider>,
  document.getElementById('root')
);