import React, { useState } from "react";

import { Breadcrumb, Layout, Menu, Icon } from "antd";
import Counter from "./counter/Counter";

import "./App.css";

const { Header, Footer, Sider, Content } = Layout;

const App = () => {
  return (
    <div id="App">
      <Layout>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0
          }}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultOpenKeys={["users"]}
            defaultSelectedKeys={["users/bill"]}
          >
            <Menu.SubMenu
              key="users"
              title={
                <span>
                  <Icon type="user" />
                  <span>User</span>
                </span>
              }
            >
              <Menu.Item key="users/tom">Tom</Menu.Item>
              <Menu.Item key="users/bill">Bill</Menu.Item>
              <Menu.Item key="users/alex">Alex</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu
              key="teams"
              title={
                <span>
                  <Icon type="team" />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key="teams/1">Team 1</Menu.Item>
              <Menu.Item key="teams/2">Team 2</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="vidya">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="uploads">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ marginLeft: 200, minHeight: "100vh" }}>
          <Header style={{ background: "#fff" }}>Header</Header>
          <Breadcrumb style={{ margin: "16px" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              margin: "0 16px 16px 16px",
              padding: 24,
              background: "#fff",
              minHeight: "50vh"
            }}
          >
            <Counter />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
