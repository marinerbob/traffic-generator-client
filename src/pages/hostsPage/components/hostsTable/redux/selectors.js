import { getHostsPage } from 'pages/hostsPage/redux/selectors.js';

export const getHostsTable = state => getHostsPage(state).hostsTable;

export const getHosts = state => getHostsTable(state).hosts;
export const getLoadingState = state => getHostsTable(state).loadingState;