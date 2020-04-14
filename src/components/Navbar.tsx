import React from "react";

const initialState = {
  name: "",
  password: "",
  nameError: "",
  passwordError: "",
};

export default class Navbar extends React.Component {
  state = initialState;

  handleChange = (event: {
    target: { type: string; name: any; checked: any; value: any };
  }) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  validate = () => {
    let nameError = " ";
    let passwordError = " ";

    if (!this.state.name) {
      nameError = "Invalid Entery!";
    }
    if (!this.state.password) {
      passwordError = "Invalid Entery!";
    }
    if (nameError || passwordError) {
      this.setState({ nameError, passwordError });
      return false;
    }
    return true;
  };

  handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <div>{this.state.nameError}</div>
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <div>{this.state.passwordError}</div>
        </div>
        <button type="submit">LOGIN</button>
      </form>
    );
  }
}
