import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Galery from "./Galery";
import Offer from "./Offer";
import Contact from "./Contact";
import Admin from "./Admin";

const Layout = children => (
  <div className="layout">
    <Navbar />
    <Router>
      <React.Fragment>
        <Route exact path="/" component={About} />
        <Route path="/Galeria" component={Galery} />
        <Route path="/Oferta" component={Offer} />
        <Route path="/Kontakt" component={Contact} />
        <Route path="/Admin" component={Admin} />
      </React.Fragment>
    </Router>
  </div>
);

export default Layout;
