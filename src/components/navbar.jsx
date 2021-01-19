import React, { Component } from "react";
import portrait from "../img/headshot_small.jpg";
import "../style.css";
import Scrollspy from "react-scrollspy";
import "bootstrap/dist/css/bootstrap.min.css";

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

        <h1 className="text-white font-weight-bold green-color title-name">Michael Lin</h1>
        <h5 className="text-white title-description">
          3B Mechatronics Engineering
        </h5>
        <h5 className="text-white title-description">
          University of Waterloo 2022
        </h5>

        <div className="d-flex justify-content-center">
          <a href="mailto:michael.jlin7@gmail.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-envelope-fill m-2 green-color"
              viewBox="0 0 16 16"
            >
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
            </svg>
          </a>
          <a href="mailto:michael.jlin7@gmail.com">
            <p className="green-color email-spacing">michael.jlin7@gmail.com</p>
            </a>
        </div>

        <div className="nav-scroll">
          <Scrollspy
            items={["home", "work-experience", "projects", "music"]}
            currentClassName="is-current"
          >
            <a href="#home">Home</a>
            <a href="#work-experience">Work Experience</a>
            <a href="#projects">Projects</a>
            <a href="#music">Music</a>
          </Scrollspy>
        </div>
      </div>
    );
  }
}

export default NavBar;
