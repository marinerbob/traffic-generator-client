import React, { useEffect } from "react";

import { Typography } from "antd";

import HostsTable from "./components/hostsTable";
import CreateHostModalContainer from "./components/createHostModal";
const { Title } = Typography;

import { useDispatch } from 'react-redux';
import { defAct } from 'reduxConfig/actions.js';

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(defAct());
  }, [dispatch])

  return (
  <>
    <Title className="page-title" level={2}>
      Управление хостами
      <CreateHostModalContainer />
    </Title>
    <HostsTable />
  </>
)};
