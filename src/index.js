import React from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.css';
import './styles/main.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { unregister } from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
unregister();
