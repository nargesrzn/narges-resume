import React, { Component } from "react";
import data from "../data.json";
import Fullpage from "../components/Fullpage";
import "./SkillSection.css";
import UpIcon from "../components/UpIcon";
import { Link } from "react-scroll";

class SkillSection extends Component {
  render() {
    return (
      <div>
        <Fullpage className="third">
          <h2 className="skill">{data.section[1].title}</h2>
          <div className="card-wrapper">
            {data.section[1].items.map(skill => {
              return (
                <div className="card">
                  <div className="image-wrapper">
                    <img src={skill.content.image} alt="logo" />
                  </div>
                  <div className="skill-title-wrapper">
                    <h4>{skill.content.title}</h4>
                  </div>
                </div>
              );
            })}
          </div>
          <Link
            activeClass="active"
            to="title"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onSetActive={this.handleSetActive}
          >
            <UpIcon />
          </Link>
        </Fullpage>
      </div>
    );
  }
}

export default SkillSection;
