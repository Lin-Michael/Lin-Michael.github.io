import React, { Component } from 'react';
import Home from './home.jsx'
import WorkExperience from './workexperience.jsx'
import Projects from './projects.jsx'
import Music from './music.jsx'


class MainContent extends Component {
    state = {  }
    render() { 
        return ( 
            <div data-spy="scroll" data-target="navbar" data-offset="0" className="content">
                <Home />
            <WorkExperience/>
            <Projects/>
            <Music/>
        </div>
         );
    }
}
 
export default MainContent;