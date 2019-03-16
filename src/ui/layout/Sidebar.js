import React from "react";

import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const Sidebar = () => {
  return (
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
          <Menu.Item key="users/tom">
            <Link to="/users/tom">Tom</Link>
          </Menu.Item>
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
  );
};

export default Sidebar;
