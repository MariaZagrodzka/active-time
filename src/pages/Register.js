// @flow

import React from "react";
// import "whatwg-fetch";

type stateType = {
  loginForm: false,
  email: string,
  password: string
};
type propType = {
  setToken: Function
};

class Register extends React.Component<propType, stateType> {
  state = {
    loginForm: false,
    email: "",
    password: ""
  };
  onInputChange = (type: string) => (
    e: SyntheticInputEvent<HTMLInputElement>
  ) => this.setState({ [type]: e.target.value });
  // TODO: Signup logic can be places in lib/index.js or lib/db.js
  setInStorage = (key: string, obj: Object) => {
    if (!key) {
      console.error("Error: Key is missing");
    }
    try {
      localStorage.setItem(key, JSON.stringify(obj));
    } catch (err) {
      console.error(err);
    }
  };
  signAction = (e: SyntheticInputEvent<HTMLInputElement>) =>
    this.state.loginForm ? this.onSignIn(e) : this.onSignUp(e);
  onSignIn = (e: SyntheticInputEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { email, password } = this.state;
    // Post request to backend
    fetch("http://localhost:3001/api/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(res => res.json())
      .then(json => {
        console.log("json", json);
        if (json.success) {
          this.setInStorage("the_main_app", { token: json.token });
          this.setState({
            password: "",
            email: ""
          });
          this.props.setToken(json.token);
          this.props.history.push("/");
        }
      });
  };
  onSignUp = e => {
    e.preventDefault();
    const { email, password } = this.state;
    fetch("http://localhost:3001/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(res => res.json())
      .then(json => {
        console.log("json", json);
        if (json.success) {
          this.setState({
            email: "",
            password: ""
          });
          this.props.history.push("/");
        } else {
          console.log("err");
        }
      });
  };
  onFormChange = () =>
    this.setState(prevState => ({ loginForm: !prevState.loginForm }));
  render() {
    const { email, password, loginForm } = this.state;
    return (
      <React.Fragment>
        <form>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={this.onInputChange("email")}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={this.onInputChange("password")}
          />
          <input
            type="submit"
            value={loginForm ? "Login" : "Register"}
            onClick={this.signAction}
          />
        </form>
        <button onClick={this.onFormChange}>
          {loginForm ? "SignUp" : "SignIn"}
        </button>
      </React.Fragment>
    );
  }
}

export default Register;
