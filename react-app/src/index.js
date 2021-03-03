import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store';

const store = configureStore();

if (process.env.NODE_ENV !== 'production') {

  window.store = store;
  window.sessionActions = sessionActions;
  window.resourceActions = resourceActions;
}

if (process.env.NODE_ENV !== "production") {
  window.store = store;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
