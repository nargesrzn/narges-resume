import React, { Component } from "react";
import data from "../data.json";
import Fullpage from "../components/Fullpage";
import DownIcon from "../components/DownIcon";
import { Link, Element } from "react-scroll";

class AboutSection extends Component {
  render() {
    return (
      <div>
        <Fullpage className="second">
          <h2>{data.section[0].title}</h2>
          <p>{data.section[0].items[0].content}</p>
          <p>{data.section[0].items[1].content}</p>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onSetActive={this.handleSetActive}
          >
            <DownIcon />
          </Link>
        </Fullpage>
        <Element name="skills" className="element" />
      </div>
    );
  }
}

export default AboutSection;
