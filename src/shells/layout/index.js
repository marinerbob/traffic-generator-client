import React from "react";

import { Layout, Menu } from "antd";

import { Link } from 'react-router-dom';

import "./layout.scss";

const { Header, Content, Sider } = Layout;

export default ({ children }) => (
  <Layout className="main-container">
    <Header className="header">
      <div className="layout-header">Генератор трафика</div>
    </Header>
    <Layout>
      <Sider width={200} theme="dark" className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          <Link to="/hosts"><Menu.Item key="1">Хосты</Menu.Item></Link>
          <Link to="/tasks"><Menu.Item key="2">Задачи</Menu.Item></Link>
          <Link to="/users"><Menu.Item key="3">Пользователи</Menu.Item></Link>
        </Menu>
      </Sider>
      <Content className="layout-content">{children}</Content>
    </Layout>
  </Layout>
);
