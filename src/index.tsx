import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';
import './css/reset.css';
import './css/site.css';
import { BrowserRouter as Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const store = createStore()

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
