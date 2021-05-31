import React from 'react';

import 'common/scss/common.scss';

import { Route, Switch } from 'react-router';

import Layout from 'shells/layout';
import ReduxShell from 'shells/redux';
import RouterShell from 'shells/router';

import HostsPage from 'pages/hostsPage';
import UsersPage from 'pages/usersPage';

export default function App() {
  return (
    <ReduxShell>
      <RouterShell>
        <Layout>
          <Switch>
            <Route path="/users">
              <UsersPage />
            </Route>
            <Route path="/hosts">
              <HostsPage />
            </Route>
            <Route path="/">
              <HostsPage />
            </Route>
          </Switch>
        </Layout>
      </RouterShell>
    </ReduxShell>
  );
}