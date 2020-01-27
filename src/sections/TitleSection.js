import React, { Component } from "react";
import "../components/Fullpage.css";
import data from "../data.json";
import Fullpage from "../components/Fullpage";
import { SocialIcon } from "react-social-icons";
import { Link, Element } from "react-scroll";
import DownIcon from "../components/DownIcon";
import "./TitleSection.css";
import SnowStorm from "react-snowstorm";

class TitleSection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>
          <Element name="title" className="element" />
          <Fullpage className="first">
            <SnowStorm />
            <h1 className="title">{data.title}</h1>

            <h2>{data.subtitle}</h2>
            <div className="icons-wrapper">
              {Object.keys(data.links).map(key => {
                return (
                  <div className="icon">
                    <SocialIcon url={data.links[key]} />
                  </div>
                );
              })}
            </div>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              <DownIcon />
            </Link>
          </Fullpage>

          <Element name="about" className="element" />
        </div>
      </div>
    );
  }
}

export default TitleSection;
