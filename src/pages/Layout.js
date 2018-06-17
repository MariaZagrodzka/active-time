import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Galery from "./Galery";
import Offer from "./Offer";
import Contact from "./Contact";
import Admin from "./Admin";
import Register from "./Register";

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
            <Navbar token={token} />
            <Route exact path="/" component={About} />
            <Route path="/Galeria" component={Galery} />
            <Route path="/Oferta" component={Offer} />
            <Route path="/Kontakt" component={Contact} />
            <Route path="/Admin" component={Admin} />
            <Route
              path="/Rejestracja"
              render={props => (
                <Register token={token} setToken={setToken} {...props} />
              )}
            />
          </React.Fragment>
        </Router>
        <style jsx>{`
          .layout {
            height: 100%;
          }
        `}</style>
      </div>
    );
  }
}

export default Layout;
