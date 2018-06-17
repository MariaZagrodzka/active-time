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
        <Layout />

        <style jsx>{`
          .router {
            display: flex;
            flex-direction: row;
            background: black;
            width: 100%;
            height: 100px;
          }

          .App-title {
            color: white;
            font-size: 1.5em;
            padding: 0px;
            margin: 10px 0 0 20px;
          }
          li {
            height: 70px;
            width: 150px;
            text-align: center;
            line-height: 70px;
          }
          a {
            color: white;
            text-decoration: none;
          }
        `}</style>
      </div>
    );
  }
}

export default App;
