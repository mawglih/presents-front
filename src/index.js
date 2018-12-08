import React from 'react';
import  {
  render,
} from 'react-dom';
import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';
import {
  Provider,
} from 'react-redux';
import {
  routerMiddleware,
  connectRouter,
  ConnectedRouter,
} from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'reducers';
import rootSaga from 'sagas';
import Routes from 'routes';
import jwt_decode from 'jwt-decode';
import setAuthToken from 'utils/setAuthToken';
import {
  setCurrentUser,
  logoutStart,
} from 'actions';

const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware,
    ),
  ),
);

sagaMiddleware.run(rootSaga);

// const jwtToken = localStorage.getItem("jwtToken");
// if (jwtToken !== "undefined") {
//   setAuthToken(jwtToken);
//   const decoded = jwt_decode(jwtToken);
//   store.dispatch(setCurrentUser(decoded));
//   const currentTime = Date.now() / 1000;
//   if (decoded.exp < currentTime) {
//     store.dispatch(logoutStart());
//     window.location.href = '/';
//   }
// }

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
