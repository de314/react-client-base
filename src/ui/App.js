import React, { useState } from "react";

import { Layout } from "antd";
import Sidebar from "./layout/Sidebar.js";
import Header from "./layout/Header";
import Breadcrumbs from "./layout/Breadcrumbs";
import Routes from "./Routes.js";
import Footer from "./layout/Footer";
import Counter from "./counter/Counter";

import "./App.css";

const { Content } = Layout;

const App = () => {
  return (
    <div id="App">
      <Layout>
        <Sidebar />
        <Layout style={{ marginLeft: 200, minHeight: "100vh" }}>
          <Header />
          <Breadcrumbs />
          <Content
            style={{
              margin: "0 16px 16px 16px",
              padding: 24,
              background: "#fff",
              minHeight: "50vh"
            }}
          >
            <Routes />
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
