import React, { Component } from "react";
import portrait from "../img/headshot_small.jpg";
import "../style.css";

class NavBar extends Component {
  state = {};
  render() {
    return (
        <div class="sidebar">
  <a class="active" href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
</div>


    );
  }
}

        // <img
        //   src={portrait}
        //   className="portrait-img m-4"
        //   alt="Portrait shot"
        // ></img>
        // <h1 className="text-white">Michael Lin</h1>
        // <h5 className="text-white">3B Mechatronics Engineering</h5>
        // <h5 className="text-white">University of Waterloo</h5>

        
        //   <nav class="nav nav-pills flex-column justfiy-content-center">
        //     <a class="nav-link" href="#item-1">
        //         <h2 className="text-white text-center">
        //         About
        //         </h2>
              
        //     </a>
        //     <a class="nav-link" href="#item-2">
        //         <h2 className="text-white text-center">
        //         Work Experience
        //         </h2>
              
        //     </a>
        //     <a class="nav-link" href="#item-3">
        //     <h2 className="text-white text-center">
        //         Projects
        //         </h2>
        //     </a>
        //   </nav>

export default NavBar;
