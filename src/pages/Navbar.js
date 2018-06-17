import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Galery from './Galery'
import Offer from './Offer'
import Contact from './Contact'
import Admin from './Admin'

const NavBar = () => (
  <div className="header">
    <div className="title-wrapper">
      <h1 className="App-title">Active Time</h1>
    </div>
    <ul className="nav-bar">
      <li>
        <Link to="/">O NAS</Link>
      </li>
      <li>
        <Link to="/Galeria">GALERIA</Link>
      </li>
      <li>
        <Link to="/Oferta">OFERTA</Link>
      </li>
      <li>
        <Link to="/Kontakt">KONTAKT</Link>
      </li>
    </ul>
    <style jsx>{`
      .nav-bar {
        display: flex;
        flex-direction: row;
        right: 1em;
        height: 100%;
        width: 40em;
        max-width: 60%;
        position: absolute;
        margin: 0;
        padding: 0;
      }
      .header {
        background: black;
        position: relative;
        width: 100%;
        height: 4.5em;
      }

      .App-title {
        color: white;
        text-decoration: none;
        font-size: 1.5em;
        padding: 0;
        margin: 0 0 0 1em;
        line-height: 3em;
        position: absolute;
      }

      li {
        height: 4.5em;
        flex: 1;
        text-align: center;
        line-height: 4.5em;
        list-style-type: none;
        display: block;
      }

      li:hover {
        background: rgb(255, 255, 255, 0.1);
      }

      a {
        color: white;
        text-decoration: none;
      }
    `}</style>
  </div>
)

export default NavBar
