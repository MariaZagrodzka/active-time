// @flow

import React from "react";
// import "whatwg-fetch";

type stateType = {
  signUpEmail: string,
  signUpPassword: string
};

class Register extends React.Component<void, stateType> {
  state = {
    signUpEmail: "",
    signUpPassword: ""
  };
  onInputChange = (type: string) => (
    e: SyntheticInputEvent<HTMLInputElement>
  ) => this.setState({ [type]: e.target.value });
  // TODO: Signup logic can be places in lib/index.js or lib/db.js
  onSignUp = () => {
    const { signUpEmail, signUpPassword } = this.state;
    fetch("http://localhost:3001/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: signUpEmail,
        password: signUpPassword
      })
    })
      .then(res => res.json())
      .then(json => {
        console.log("json", json);
        if (json.success) {
          this.setState({
            signUpEmail: "",
            signUpPassword: ""
          });
        } else {
          console.log("err");
        }
      });
  };
  render() {
    const { signUpEmail, signUpPassword } = this.state;
    return (
      <React.Fragment>
        <input
          type="text"
          placeholder="email"
          value={signUpEmail}
          onChange={this.onInputChange("signUpEmail")}
        />
        <input
          type="password"
          placeholder="password"
          value={signUpPassword}
          onChange={this.onInputChange("signUpPassword")}
        />
        <button type="button" onClick={this.onSignUp}>
          Sign Up
        </button>
      </React.Fragment>
    );
  }
}

export default Register;
