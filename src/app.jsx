import React from 'react';

import 'common/scss/common.scss';

import HostsPage from 'pages/hostsPage';
import ReduxShell from 'shells/redux';
export default function App() {
  return (
    <ReduxShell>
      <HostsPage />
    </ReduxShell>
  );
}