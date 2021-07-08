import React, { useEffect } from "react";

import { Typography } from "antd";

import HostsTable from "./components/hostsTable";
import CreateHostModalContainer from "./components/createHostModal";

const { Title } = Typography;

export default () => (
  <>
    <Title className="page-title" level={2}>
      Управление хостами
      <CreateHostModalContainer />
    </Title>
    <HostsTable />
  </>
);
