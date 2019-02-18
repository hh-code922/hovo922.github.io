import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux'
import App from './App'
import reducer from './reducers/index.js';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';









const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));




render(
  <Provider store={store}>
   <App />
  </Provider>,
  document.getElementById('root')
);