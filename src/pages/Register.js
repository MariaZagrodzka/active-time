// @flow

import React from "react";
// import "whatwg-fetch";

type stateType = {
  loginForm: boolean,
  email: string,
  password: string,
  validation: boolean
};
type propType = {
  setToken: Function,
  history: Array<any>
};

class Register extends React.Component<propType, stateType> {
  state = {
    loginForm: false,
    email: "",
    password: "",
    validation: false
  };
  onInputChange = (type: string) => (
    e: SyntheticInputEvent<HTMLInputElement>
  ) => {
    this.setState({ [type]: e.target.value });
    type === "email" && this.validateEmail(e);
  };
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
  onSignUp = (e: SyntheticInputEvent<HTMLInputElement>) => {
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
          this.onSignIn(e);
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
  validateEmail = (e: SyntheticInputEvent<HTMLInputElement>) =>
    this.setState({
      validation: new RegExp(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ).test(e.target.value)
    });
  render() {
    const { email, password, loginForm, validation } = this.state;
    return (
      <div className="sign">
        <div className="sign-form">
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={this.onInputChange("email")}
            className="sign-form__inp"
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={this.onInputChange("password")}
            className="sign-form__inp"
          />
        </div>
        <div className="sign-form__btns">
          <button onClick={this.onFormChange}>
            {loginForm ? "SignUp" : "SignIn"}
          </button>
          <button
            type="submit"
            onClick={this.signAction}
            disabled={!validation}
          >
            {loginForm ? "Login" : "Register"}
          </button>
        </div>
        <style jsx>{`
          .sign {
            height: 200px;
            width: 300px;
            border: 1px solid #aaa;
            border-radius: 2px;
            display: flex;
            flex-direction: column;
            margin: 0 auto;
          }
          .sign-form__btns {
            display: flex;
          }
          .sign-form {
            display: flex;
            flex-direction: column;
            width: 80%;
            justify-content: center;
          }
          .sign-form__inp {
            height: 25px;
          }
        `}</style>
      </div>
    );
  }
}

export default Register;
