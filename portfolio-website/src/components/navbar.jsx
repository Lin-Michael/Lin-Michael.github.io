import React, { Component } from "react";
import portrait from "../img/headshot_small.jpg";
import "../style.css";

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
        <h5 className="text-white title-description">3B Mechatronics Engineering</h5>
        <h5 className="text-white title-description">University of Waterloo 2022</h5>

        <nav id="navbar">
        <a className="nav-link" href="#home">
                <p className="text-white nav-item-text text-center">
                Home
                </p>
              
            </a>
            <a className="nav-link" href="#work-experience">
                <p className="text-white nav-item-text text-center">
                Work Experience
                </p>
              
            </a>
            <a className="nav-link" href="#item-3">
            <p className="text-white nav-item-text text-center">
                Projects
                </p>
            </a>
            <a className="nav-link" href="#item-3">
            <p className="text-white nav-item-text text-center">
                Music
                </p>
            </a>
        </nav>
     

</div>


    );
  }
}



export default NavBar;
