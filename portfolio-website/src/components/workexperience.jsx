import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import JobHeader from "./jobheader";
import IgnisLogo from "../img/ignis_logo.png";
import BMOLogo from "../img/bmo_logo.jpg";
import ATSLogo from "../img/ats_logo.jpg";
import fanLogo from "../img/fan_logo.jpg";
import waterlooLogo from "../img/waterloo.png";
import torontoLogo from "../img/toronto_logo.png";

class WorkExperience extends Component {
  state = {};
  render() {
    return (
      <div id="work-experience" className="section">
          <h1>Work Experience</h1>
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <JobHeader picture={BMOLogo}
              jobName="Software Developer"
              company="Bank of Montreal"
              duration="Sept 2020 to Dec 2020"
              />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
            <JobHeader picture={IgnisLogo}
              jobName="Embedded Software Engineer"
              company="Ignis Innovations"
              duration="Jan 2020 to Mar 2020"
              />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
            <JobHeader picture={ATSLogo}
              jobName="Automation Systems Designer"
              company="ATS Automation"
              duration="May 2019 to Aug 2019"
              />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
            <JobHeader picture={fanLogo}
              jobName="Product Designer"
              company="Daltec Fans"
              duration="Sep 2018 to Dec 2018"
              />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="4">
            <JobHeader picture={waterlooLogo}
              jobName="Junior Web Developer"
              company="University of Waterloo"
              duration="Jan 2018 to Apr 2018"
              />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="5">
            <JobHeader picture={torontoLogo}
              jobName="Camp Counsellor"
              company="City of Toronto"
              duration="Jul 2017 to Aug 2017"
              />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="5">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}

export default WorkExperience;
