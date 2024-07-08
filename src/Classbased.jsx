import React, { Component } from "react";

export default class Classbased extends Component {
  constructor() {
    super();
    console.log("I'm constructor method");
  }
  componentDidMount() {
    console.log("I'm component did mount");
  }
  componentDidUpdate() {
    console.log("I'm component did update");
  }
  componentWillUnmount() {
    console.log("i'm component will unmount");
  }
  render() {
    console.log("I'm render method");
    return (
      <div>
        <p></p>
        <span>hfghjggdfghjkl;kl;</span>
      </div>
    );
  }
}
