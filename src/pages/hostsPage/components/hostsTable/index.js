import React, { useEffect } from "react";

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
  const isLoading = loadingState === consts.loadingState.LOADING_STARTED

  useEffect(() => {
    dispatch(fetchHosts());
  }, [dispatch]);

  return (
    <>
      <Table loading={isLoading} dataSource={hosts} columns={columns} pagination={{ pageSize: 8 }} />
    </>
  );
}