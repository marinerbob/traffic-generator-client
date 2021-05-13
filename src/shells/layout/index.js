import React from "react";

import { Layout, Menu } from "antd";

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
          <Menu.Item key="1">Хосты</Menu.Item>
          <Menu.Item key="2">Задачи</Menu.Item>
          <Menu.Item key="3">Пользователи</Menu.Item>
        </Menu>
      </Sider>
      <Content className="layout-content">{children}</Content>
    </Layout>
  </Layout>
);
