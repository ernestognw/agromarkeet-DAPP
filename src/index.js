import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App.js';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import reducer from './page/reducers/reducer';
import { BrowserRouter as Router } from "react-router-dom";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(
  () => {},
  composeWithDevTools(
    applyMiddleware(
      thunk
    )
  )
);

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, 
  document.getElementById('root'));
  registerServiceWorker();
