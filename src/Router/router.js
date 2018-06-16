// @flow

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Galery from "../pages/Galery";
import PriceList from "../pages/PriceList";
import Contact from "../pages/Contact";
import Register from "../pages/Register";

const RouterLinks = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Strona Główna</Link>
        </li>
        <li>
          <Link to="/O nas">O nas</Link>
        </li>
        <li>
          <Link to="/Galeria">Galeria</Link>
        </li>
        <li>
          <Link to="/Cennik">Cennik</Link>
        </li>
        <li>
          <Link to="/Kontakt">Kontakt</Link>
        </li>
        <li>
          <Link to="/Rejestracja">Rejestracja</Link>
        </li>
      </ul>
      <Route path="/" component={Home} />
      <Route path="/O nas" component={About} />
      <Route path="/Galeria" component={Galery} />
      <Route path="/Cennik" component={PriceList} />
      <Route path="/Kontakt" component={Contact} />
      <Route path="/Rejestracja" component={Register} />
    </div>
  </Router>
);
export default RouterLinks;
