import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import {createStore, applyMiddleware} from 'redux';

import allReducers from './reducers/index';
import App from './containers/App.js';

const store = createStore(
    allReducers,
    composeWithDevTools()
);

ReactDom.render(
<Provider store={store}>
  <App />
</Provider>
  ,document.getElementById('root')
);
