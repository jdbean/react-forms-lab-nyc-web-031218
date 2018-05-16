import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      value: "",
      // charRemaining: this.props.maxChars
    };
  }

  // handleChange = (event) => {
  //
  //   let prevState = this.state
  //
  //   this.setState((prevState, event) => ({
  //     value: event.target.value,
  //     charRemaining: prevState.charRemaining - event.target.value.length
  //   }));
  // }
  handleChange = (event) => {

    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <p>Charachters Remaining: {this.props.maxChars - this.state.value.length} </p>
      </div>
    );
  }
}

export default TwitterMessage;
