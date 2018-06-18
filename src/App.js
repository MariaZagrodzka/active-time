// @flow

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Layout from "./pages/Layout";

type stateType = {
  logged: boolean,
  token: string
};
class App extends React.Component<void, stateType> {
  state = {
    logged: false,
    token: ""
  };
  setToken = (token: string) => this.setState({ token });
  render() {
    const { token } = this.state;
    return (
      <div className="App">
        <Layout token={token} setToken={this.setToken} />

        <style jsx>{`
          .App {
            min-height: 100vh;
            width: 100%;
            min-width: 400px;
            position: relative;
            display: flex;
          }
        `}</style>
      </div>
    );
  }
}

export default App;
