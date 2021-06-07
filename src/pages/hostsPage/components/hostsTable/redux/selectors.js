import { createSelector } from 'reselect';

import { getHostsPage } from 'pages/hostsPage/redux/selectors.js';

export const getHostsTable = state => getHostsPage(state).hostsTable;

export const getHosts = state => getHostsTable(state).data;
export const getHostsLength = state => getHosts(state).length;
export const getLoadingState = state => getHostsTable(state).loadingState;