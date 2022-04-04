import React, { Component } from "react";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    const { level, changeLevel } = this.props;
    return (
      <header className="Navbar">
        <div className="logo">
          <a href="#">
            Color<span className="strong">Palettes</span>
          </a>
        </div>
        <div className="slider-container">
          <span>Value level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
              trackStyle={{ backgroundColor: "transparent", height: "8px" }}
              handleStyle={{
                backgroundColor: "#222222",
                border: "2px solid #222222",
                marginTop: "-3px",
                outline: "none",
              }}
              railStyle={{ height: "8px" }}
            />
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
