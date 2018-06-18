import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Galery from "./Galery";
import Offer from "./Offer";
import Contact from "./Contact";
import Admin from "./Admin";
import Register from "../components/Register";

class Layout extends React.Component {
  getFromStorage = key => {
    if (!key) {
      return null;
    }
    try {
      const valueStr = localStorage.getItem(key);
      if (valueStr) {
        return JSON.parse(valueStr);
      }
      return null;
    } catch (err) {
      return null;
    }
  };
  logout = () => {
    const obj = this.getFromStorage("the_main_app");
    if (obj && obj.token) {
      const { token } = obj;
      fetch("http://localhost:3001/api/account/logout?token=" + token, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.props.setToken("");
            localStorage.setItem("the_main_app", "");
          }
        });
    }
  };
  render() {
    const { token, setToken } = this.props;
    return (
      <div className="layout">
        <Router>
          <React.Fragment>
            <Navbar token={token} logout={this.logout} />
            <main>
              <Route exact path="/" component={About} />
              <Route path="/Galeria" component={Galery} />
              <Route path="/Oferta" component={Offer} />
              <Route path="/Kontakt" component={Contact} />
              <Route
                path="/Rejestracja"
                render={props => (
                  <Register token={token} setToken={setToken} {...props} />
                )}
              />
            </main>
            <footer className="footer">
              Jeśli masz pytania, dzwoń: 123456789 :)
            </footer>
          </React.Fragment>
        </Router>
        <style jsx>{`
          .layout {
            width: 100%;
          }
          main {
            padding-top: 4.5em;
            display: flex;
            height: 100%;
          }
          .footer {
            background: black;
            width: 100%;
            height: 5em;
            color: rgba(200, 200, 200, 0.8);
            font-size: 0.7em;
            text-align: center;
            padding-top: 1em;
            bottom: 0;
            position: absolute;
          }
        `}</style>
      </div>
    );
  }
}

export default Layout;
