import React, { useEffect, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchHosts } from './redux/actions';
import { getHosts, getLoadingState } from './redux/selectors';
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
  
  const hosts = useSelector(getHosts);

  const loadingState = useSelector(getLoadingState);
  const isLoading = loadingState === consts.loadingState.LOADING_STARTED;

  if (isLoading) {
    dispatch(fetchHosts());
  }

  return <DataTable rowKey={rowKey} isLoading={isLoading} dataSource={hosts} columns={columns} pageSize={pageSize} />
}