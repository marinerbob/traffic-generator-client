import React from "react";

import { Typography } from "antd";

import UsersTable from './components/usersTable';
import CreateUserModalContainer from "./components/createUserModal/createUserModalContainer";

const { Title } = Typography;

export default () => (
  <>
    <Title className="page-title" level={2}>
      Управление пользователями
      <CreateUserModalContainer />
    </Title>
    <UsersTable />
  </>
);