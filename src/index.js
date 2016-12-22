import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, } from 'react-router-redux'
import { Provider } from 'react-redux'

import AsyncApp from './containers/AsyncApp'
import FirstView from './containers/FirstView'
import SecondView from './containers/SecondView'

import configureStore from './configureStore'
import './index.css';

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
        <Route path="/" component={FirstView} />
        <Route path="/first" component={FirstView} />
        <Route path="/second" component={SecondView} />
        <Route path="/asyncapp" component={AsyncApp} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
