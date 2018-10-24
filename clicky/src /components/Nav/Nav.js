import React from "react";
import "./Nav.css";

const Nav = props => (
  <div className="container">
  <nav className="navbar-fluid fixed-top navbar-expand-lg navbar-dark">
    <a className="navbar-brand js-scroll-trigger" href="Clicky-Game">
    {props.title}
    </a>
    <ul className="navbar-nav  justify-content-end text-uppercase">
    <li className="nav-item" id="rw">{props.rightWrong}</li>
    &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
      <li className="nav-item" id="cur-sco">Current Score {props.score}</li>
      &#160;|&#160;
      <li className="nav-item" id="top-sco">Top Score {props.topScore}</li>
    </ul>
  </nav>
  </div>
);

export default Nav;