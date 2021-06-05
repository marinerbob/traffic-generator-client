import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchHosts, fetchDataStart } from './redux/actions';
import { getHosts, getLoadingState } from './redux/selectors';
import consts from './redux/constants';

import { Table, Tag } from "antd";



const columns = [
  {
    title: "IP-адрес",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>
  },
  {
    title: "Задачи",
    key: "tasks",
    dataIndex: "tasks",
    render: (tasks) => (
      <>
        {tasks.map((task) => {
          return (
            <Tag color="geekblue" key={task}>
              {task}
            </Tag>
          );
        })}
      </>
    )
  }
];

export default () => {
  const dispatch = useDispatch();
  const hosts = useSelector(getHosts);
  const loadingState = useSelector(getLoadingState);
  const isLoading = loadingState === consts.loadingState.LOADING_STARTED

  useEffect(() => {
    dispatch(fetchDataStart());
  }, [dispatch]);

  return (
    <>
      <Table loading={isLoading} dataSource={hosts} columns={columns} pagination={{ pageSize: 8 }} />
    </>
  );
}