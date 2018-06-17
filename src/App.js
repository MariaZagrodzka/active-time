// @flow

import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Layout from './pages/Layout'

type stateType = {
  logged: boolean,
  token: string
}
class App extends React.Component<void, stateType> {
  state = {
    logged: false,
    token: ''
  }
  setToken = (token: string) => this.setState({ token })
  render() {
    const { token } = this.state
    return (
      <div className="App">
        <Layout />
        <footer className="footer">
          Jeśli masz pytania, dzwoń: 123456789 :)
        </footer>
        <style jsx>{`
          .App {
            height: 100%;
            width: 100%;
          }

          .footer {
            background: black;
            width: 100%;
            height: 5em;
            color: rgba(200, 200, 200, 0.8);
            font-size: 0.7em;
            text-align: center;
            padding-top: 1em;
          }
        `}</style>
      </div>
    )
  }
}

export default App
