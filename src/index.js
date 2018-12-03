import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { routerMiddleware, connectRouter} from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'reducers';
import rootSaga from 'sagas';
import App from 'containers/App';
import * as serviceWorker from './serviceWorker';

const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware,
    ),
  ),
);

sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
