import React, { Component } from "react";
import Navbar from "./Navbar.js";
import About from "./About.js";
import Experience from "./Experience.js";
import Education from "./Education.js";
import Skills from "./Skills.js";
import Interests from "./Interests.js";
import Awards from "./Awards.js";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Interests />
        <Awards />
      </React.Fragment>
    );
  }
}

export default App;
