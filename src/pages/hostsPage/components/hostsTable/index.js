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

const data = [
  {
    key: "1",
    name: "10.1.11.1",
    tasks: ["ssh", "ftp"]
  },
  {
    key: "2",
    name: "10.1.11.2",
    tasks: ["mail"]
  },
  {
    key: "3",
    name: "10.1.11.3",
    tasks: ["mail", "ssh"]
  },
  {
    key: "4",
    name: "10.1.11.4",
    tasks: ["mail", "ssh"]
  },
  {
    key: "5",
    name: "10.1.11.5",
    tasks: ["mail", "ssh"]
  },
  {
    key: "6",
    name: "10.1.11.6",
    tasks: ["mail", "ssh"]
  },
  {
    key: "7",
    name: "10.1.11.7",
    tasks: ["mail", "ssh"]
  },
  {
    key: "8",
    name: "10.1.11.8",
    tasks: ["mail", "ssh"]
  },
  {
    key: "9",
    name: "10.1.11.9",
    tasks: ["mail", "ssh"]
  },
  {
    key: "10",
    name: "10.1.11.10",
    tasks: ["mail", "ssh", "ftp"]
  },
  {
    key: "11",
    name: "10.1.11.11",
    tasks: ["mail", "ssh"]
  }
];

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHosts());
  }, []);

  return (
    <>
      <Table dataSource={data} columns={columns} pagination={{ pageSize: 8 }} />
    </>
  );
}