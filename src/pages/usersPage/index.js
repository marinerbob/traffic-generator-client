import React from "react";

import { Typography } from "antd";

import UsersTable from './components/usersTable';

const { Title } = Typography;

export default () => (
  <>
    <Title className="page-title" level={2}>
      Управление пользователями
    </Title>
    <UsersTable />
  </>
);