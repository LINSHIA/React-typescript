import React from "react";

const initialState = {
  Name: "",
  Password: "",
  NameError: "",
  PasswordError: "",
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

  valid = () => {
    let NameError = "";
    let PasswordError = "";

    if (!this.state.Name) {
      NameError = "UseName error";
    }
    if (!this.state.Password) {
      PasswordError = "Password error";
    }
    if (NameError || PasswordError) {
      this.setState({ NameError, PasswordError });
      return false;
    }
    return true;
  };

  handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const isValid = this.valid();
    if (isValid) {
      console.log(this.state);

      this.setState(initialState);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            name="Name"
            placeholder="Name"
            value={this.state.Name}
            onChange={this.handleChange}
          />
          <div>{this.state.NameError}</div>
        </div>
        <div>
          <input
            type="Password"
            name="Password"
            placeholder="Password"
            value={this.state.Password}
            onChange={this.handleChange}
          />
          <div>{this.state.PasswordError}</div>
        </div>
        <button type="submit">LOGIN</button>
      </form>
    );
  }
}
