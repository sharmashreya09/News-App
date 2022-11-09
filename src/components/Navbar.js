import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="header">
        </div>
        <div className="blank">
          News-Xpress-
          <p className="slogan">The art of publishing</p>
        </div>
        <div className="topnav">
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/business">Business</Link>
          <Link to="/entertainment">Entertainment</Link>
          <Link to="/general">General</Link>
          <Link to="/health">Health</Link>
          <Link to="/science">Science</Link>
          <Link to="/sports">Sports</Link>
          <Link to="/technology">Technology</Link>
        </div>
      </div>
    )
  }
}
