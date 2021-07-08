import React from "react";

import { Typography } from "antd";

import TasksTable from "./components/tasksTable";

const { Title } = Typography;

export default () => (
  <>
    <Title className="page-title" level={2}>
      Управление задачами
    </Title>
    <TasksTable />
  </>
);