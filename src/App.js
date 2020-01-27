import React, { Component } from "react";
import "./App.css";
import TitleSection from "./sections/TitleSection";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import Navbar from "./components/navbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color1: "#95dee3",
      color2: "#edcdc2",
      color3: "#72f772",
      color4: "black",
      counter: 0
    };
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor() {
    let rang = ["green", "#b3cde0", "#f4b6c2", "#e6e6ea"];
    let zamine = ["#461220", "#011f4b", "#251e3e", "#1e1f26"];
    if (this.state.counter > 3) {
      this.setState({
        counter: 0,
        color1: "#95dee3",
        color2: "#edcdc2",
        color3: "#72f772",
        color4: "black"
      });
    } else
      this.setState({
        color1: zamine[this.state.counter],
        color2: zamine[this.state.counter],
        color3: zamine[this.state.counter],
        color4: rang[this.state.counter],
        counter: this.state.counter + 1
      });
  }
  render() {
    return (
      <div className="App">
        <Navbar />

        <div>
          <img
            src="magic.png"
            style={{
              margin: "10px",
              display: "flex",
              position: "fixed"
            }}
            onClick={this.changeColor}
          />
        </div>
        <div
          style={{
            backgroundColor: this.state.color1,
            color: this.state.color4
          }}
        >
          <TitleSection />
        </div>
        <div
          style={{
            backgroundColor: this.state.color2,
            color: this.state.color4
          }}
        >
          <AboutSection />
        </div>
        <div
          style={{
            backgroundColor: this.state.color3,
            color: this.state.color4
          }}
        >
          <SkillSection />
        </div>
      </div>
    );
  }
}
export default App;
