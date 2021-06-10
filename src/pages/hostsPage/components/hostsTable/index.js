import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchHosts } from './redux/actions';
import { getHostsValues, getLoadingState, getHostsLength } from './redux/selectors';
import consts from './redux/constants';


import DataTable from 'components/dataTable/dataTable.jsx';

const columns = [
  {
    title: "IP-адрес",
    dataIndex: "ip",
    key: "ip"
  },
  {
    title: "Имя",
    key: "name",
    dataIndex: "name"
  }
];

const pageSize = 8;
const rowKey = "name";

export default () => {
  const dispatch = useDispatch();
  
  const hosts = useSelector(getHostsValues);
  const hostsLength = useSelector(getHostsLength);

  const loadingState = useSelector(getLoadingState);
  const isLoading = loadingState === consts.loadingState.LOADING_STARTED;
  const skeletonSize = hostsLength > 0 && hostsLength <= pageSize ? hostsLength + 1 : pageSize;

  if (isLoading) {
    dispatch(fetchHosts());
  }

  return <DataTable rowKey={rowKey}
            isLoading={isLoading}
            dataSource={hosts}
            columns={columns}
            pageSize={pageSize}
            skeletonSize={skeletonSize} />
}