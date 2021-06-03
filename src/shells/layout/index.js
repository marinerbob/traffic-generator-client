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
          defaultSelectedKeys={["/hosts"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          <Menu.Item key="/hosts"><Link to="/hosts">Хосты</Link></Menu.Item>
          <Menu.Item key="/tasks"><Link to="/tasks">Задачи</Link></Menu.Item>
          <Menu.Item key="/users"><Link to="/users">Пользователи</Link></Menu.Item>
        </Menu>
      </Sider>
      <Content className="layout-content">{children}</Content>
    </Layout>
  </Layout>
);
