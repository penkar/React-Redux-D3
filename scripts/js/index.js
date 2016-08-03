'use strict'
import React from 'react'
import { render } from 'react-dom';
import Container from './containers/start.jsx';
import { Provider } from 'react-redux'
import configureStore from './store'

const store = configureStore();

render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById('app')
);
