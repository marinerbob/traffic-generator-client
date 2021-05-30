import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { fetchHosts } from './redux/actions';

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
  

  useEffect(() => {
    dispatch(fetchHosts());
  }, [dispatch]);

  return (
    <>
      <Table dataSource={data} columns={columns} pagination={{ pageSize: 8 }} />
    </>
  );
}