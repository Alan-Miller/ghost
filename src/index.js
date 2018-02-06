import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/reset.css';
import './styles/main.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import { unregister } from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
unregister();
