import React from 'react';
import { render } from 'react-dom';
import Start2 from './components/start.jsx';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import configureStore from './store'

const store = configureStore();
const target = document.getElementById('app');

render(
  <Provider store={store}>
    <Start2 />
  </Provider>,

  target
);
