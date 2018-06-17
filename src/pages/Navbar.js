import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Galery from "./Galery";
import Offer from "./Offer";
import Contact from "./Contact";
import Admin from "./Admin";

const NavBar = ({ token }) => (
  <div className="header">
    <h1 className="App-title">Active Time</h1>
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
      {token.length < 1 ? (
        <li>
          <Link to="/Rejestracja">Rejestracja</Link>
        </li>
      ) : (
        <li>
          <button onClick={this.logout}>Logout</button>
        </li>
      )}
    </ul>
    <style jsx>{`
      .nav-bar {
        display: flex;
        flex-direction: row;
        right: 1em;
        height: auto;
        min-width: 50%;
        max-width: 70%;
        position: absolute;
        margin: 0;
        padding: 0;
      }
      .header {
        background: black;
        height: 200px;
      }
    `}</style>
  </div>
);

export default NavBar;
