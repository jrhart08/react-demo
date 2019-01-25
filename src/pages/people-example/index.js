import React from 'react';
import { Provider } from 'react-redux';
import People from './components/People';
import configureStore from './store/configureStore';

const store = configureStore();

export default () => (
  <Provider store={store}>
    <People />
  </Provider>
);
