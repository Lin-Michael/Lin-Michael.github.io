import React, { Component } from "react";
import portrait from "../img/headshot_small.jpg";
import "../style.css";
import Scrollspy from "react-scrollspy";
import 'bootstrap/dist/css/bootstrap.min.css';

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div class="sidebar">
        <img
          src={portrait}
          className="portrait-img m-4"
          alt="Portrait shot"
        ></img>

        <h1 className="text-white title-name">Michael Lin</h1>
        <h5 className="text-white title-description">
          3B Mechatronics Engineering
        </h5>
        <h5 className="text-white title-description">
          University of Waterloo 2022
        </h5>

        <Scrollspy
          items={["home", "work-experience", "projects", "music"]}
          currentClassName="is-current"
        >
            <a className="nav-link" href="#home">Home</a>
            <a className="nav-link" href="#work-experience">Work Experience</a>
            <a className="nav-link" href="#projects">Projects</a>
            <a className="nav-link" href="#music">Music</a>
        </Scrollspy>



</div>

    );
  }
}

export default NavBar;
