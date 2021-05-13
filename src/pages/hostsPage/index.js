import React from "react";

import { Typography } from "antd";

import Layout from "../../shells/layout";
import HostsTable from "./components/hostsTable";
import CreateHostModalContainer from "./components/createHostModal";
const { Title } = Typography;

export default () => (
  <Layout>
    <Title className="page-title" level={2}>
      Управление хостами
      <CreateHostModalContainer />
    </Title>
    <HostsTable />
  </Layout>
);
