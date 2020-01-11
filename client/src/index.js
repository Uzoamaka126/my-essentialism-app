import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { createStore, compose, applyMiddleware } from 'redux'

import { setToken } from './_helpers/authenticationChecker'
import { rootReducer } from './redux-store/reducers/index';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk, setToken, logger ))
);

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
