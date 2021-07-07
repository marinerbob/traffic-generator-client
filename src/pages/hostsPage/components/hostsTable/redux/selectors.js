import { createSelector } from 'reselect';

import { getHostsPage } from 'pages/hostsPage/redux/selectors';

import { getObjKeys, getObjValues } from 'utils/reduxUtils';

export const getHostsTable = state => getHostsPage(state).hostsTable;

export const getHosts = state => getHostsTable(state).data;
export const getHostsIds = createSelector(getHosts, hosts => getObjKeys(hosts));
export const getHostsValues = createSelector(getHosts, hosts => getObjValues(hosts));
export const getHostsLength = createSelector(getHostsValues, hosts => hosts.length);

export const getHost = id => state => getHosts(state)[id];
export const getHostName = id => state => getHost(id)(state).name;

export const getLoadingState = state => getHostsTable(state).loadingState;

export const getDeletedHostId = state => getHostsTable(state).deletedHostId;