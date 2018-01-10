import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import allReducers from './reducers/index';
import App from './components/App.js';

const store = createStore(
    allReducers
);

ReactDom.render(
<Provider store={store}>
  <App />
</Provider>
  ,document.getElementById('root')
);
