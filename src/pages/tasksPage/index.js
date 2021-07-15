import React from "react";

import { Typography } from "antd";

import TasksTable from "./components/tasksTable";
import CreateTaskModalContainer from "./components/createTaskModal";

const { Title } = Typography;

export default () => (
  <>
    <Title className="page-title" level={2}>
      Управление задачами
      <CreateTaskModalContainer />
    </Title>
    <TasksTable />
  </>
);