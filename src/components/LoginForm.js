import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      // password: "",
      // username: ""
    };
  }

  handleSubmit = (event) => {
    // debugger
    event.preventDefault()
    if (!!this.state.password && !!this.state.username) {
      this.props.onSubmit()
    } else {
      alert("must fill in username and password")
    }
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input
              id="test-username"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
             />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="test-password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <button type="submit" onClick={this.handleSubmit}>Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
