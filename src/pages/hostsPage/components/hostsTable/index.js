import React, { useEffect, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchHosts } from './redux/actions';
import { getHosts, getLoadingState } from './redux/selectors';
import consts from './redux/constants';

import { Table } from "antd";

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

export default () => {
  const dispatch = useDispatch();
  
  const hosts = useSelector(getHosts);

  const loadingState = useSelector(getLoadingState);
  const isLoading = loadingState === consts.loadingState.LOADING_STARTED;
  const isErrored = loadingState === consts.loadingState.LOADING_ERRORED;

  if (isLoading) {
    dispatch(fetchHosts());
  }

  return (
    <>
      <Table rowKey="name" loading={isLoading} dataSource={hosts} columns={columns} pagination={{ pageSize: 8 }} />
    </>
  );
}