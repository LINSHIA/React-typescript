import React from "react";

interface ILoginProps {}

interface ILoginState {
  UserName: string;

  PassWord: string;
}

export default class LoginPage extends React.Component<
  ILoginProps,
  ILoginState
> {
  constructor(props: string) {
    super(props);
    this.state = {
      UserName: "",
      PassWord: "",
    };
  }

  updateLoginInfo = (event: any) => {
    let updatedusername = this.state.UserName;
    let updatedpassword = this.state.PassWord;
    if (event.target.name === "user-name") {
      updatedusername = event.target.value;
    } else if (event.target.name === "pass-word") {
      updatedpassword = event.target.value;
    }
    this.setState({
      UserName: updatedusername,
      PassWord: updatedpassword,
    });
  };
  render() {
    return (
      <div>
        <h2>
          {this.state.UserName} {this.state.PassWord}
        </h2>

        <form>
          <h3>Login Page</h3>
          <label htmlFor="user-name">UserName:</label>
          <input
            type="text"
            name="user-name"
            value={this.state.UserName}
            onChange={this.updateLoginInfo}
          />
          <label htmlFor="pass-word">Password:</label>
          <input
            type="text"
            name="pass-word"
            value={this.state.PassWord}
            onChange={this.updateLoginInfo}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
