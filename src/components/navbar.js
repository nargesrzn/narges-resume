import React, { Component } from "react";
import data from "../data.json";
import "../App.css";
import "./navbar.css";
import { Link, Element } from "react-scroll";
class Navbar extends Component {
  render() {
    return (
      <div className="navigation">
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onSetActive={this.handleSetActive}
        >
          <div className="nav">{data.navItems[0]}</div>
        </Link>
        <Link
          activeClass="active"
          to="skill"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onSetActive={this.handleSetActive}
        >
          <div className="nav">{data.navItems[1]}</div>
        </Link>
      </div>
    );
  }
}

export default Navbar;
