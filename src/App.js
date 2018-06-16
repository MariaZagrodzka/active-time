// @flow

import React, { Component } from 'react'
import logo from './logo.svg'
import RouterLinks from './Router/router'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="nav-bar">
          <RouterLinks />
          <h1 className="App-title">Active Time</h1>
        </div>
        <style jsx>{`
          .nav-bar {
            text-align: left;
            background: black;
            height: 50px;
            width: 100%;
            position: absolute;
          }

          .App-title {
            color: white;
            font-size: 1.5em;
            padding: 0px;
            margin: 10px 0 0 20px;
          }
        `}</style>
      </div>
    )
  }
}

export default App
