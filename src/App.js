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
        <style jsx>{`
          .App {
            height: 100%;
            width: 100%;
          }
        `}</style>
      </div>
    )
  }
}

export default App
