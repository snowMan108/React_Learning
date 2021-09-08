"use strict";
import React, { Component, createContext } from "react";
class Counter extends React.Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2"],
  };

  styles = {
    fontSize: "30px",
    fontWeight: "bold",
  };
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}> {tag} </li>
        ))}
      </ul>
    );
  }
  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  handleIncrement() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "Please create a new tag"}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button onClick={this.handleIncrement} className="btn btn-secondary">
          Increment
        </button>
        {this.renderTags()}
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
