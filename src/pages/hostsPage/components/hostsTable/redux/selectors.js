import { getHostsPage } from 'pages/hostsPage/redux/selectors.js';

export const getHosts = state => getHostsPage(state).hosts;
export const getLoadingState = state => getHostsPage(state).loadingState;