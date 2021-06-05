import React, { useEffect } from 'react';

import 'common/scss/common.scss';

import { Route, Switch } from 'react-router';

import Layout from 'shells/layout';
import ReduxShell from 'shells/redux';
import RouterShell from 'shells/router';

import HostsPage from 'pages/hostsPage';
import UsersPage from 'pages/usersPage';
import TasksPage from 'pages/tasksPage';

export default function App() {
  return (
    <ReduxShell>
      <RouterShell>
        <Layout>
          <Switch>
            <Route path="/tasks" component={TasksPage} />
            <Route path="/users" component={UsersPage} />
            <Route path="/hosts" component={HostsPage} />
            <Route path="/" component={HostsPage} />
          </Switch>
        </Layout>
      </RouterShell>
    </ReduxShell>
  );
}