import React from 'react';
import Routes from 'routes';
import Layout from 'components/Layout';
import { ConnectedRouter } from 'connected-react-router';

const App = ({
  history,
}) => (
  <ConnectedRouter history={history}>
    <Layout>
      <Routes />
    </Layout>
  </ConnectedRouter>
);

export default App;
