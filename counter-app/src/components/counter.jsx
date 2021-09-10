import React, { Component, createContext } from "react";
class Counter extends React.Component {
  state = {
    count: this.props.value,
  };

  styles = {
    fontSize: "30px",
    fontWeight: "bold",
  };
  constructor() {
    let countVal = this.props.count;
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  handleIncrement() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    console.log("props : ", this.props.value);
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button onClick={this.handleIncrement} className="btn btn-secondary">
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    if (count === 0) {
      return "zero";
    }
    return count;
  }
}
export default Counter;
