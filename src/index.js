import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route,IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, } from 'react-router-redux'
import { Provider } from 'react-redux'

import AsyncApp from './containers/AsyncApp'
import FirstView from './containers/FirstView'
import SecondView from './containers/SecondView'
import App from './containers/App'

import configureStore from './configureStore'
import './index.css';

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
        <Route path="/" component={App} >
          <IndexRoute component={FirstView} />
          <Route path="first" component={FirstView} />
          <Route path="second" component={SecondView} />
          <Route path="asyncapp" component={AsyncApp} />
        </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
