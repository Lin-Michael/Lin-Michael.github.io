import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import ShoppingList from "../img/projects/shopping_list.PNG";
import Arm from "../img/projects/arm.png";
class Projects extends Component {
  state = {};
  render() {
    return (
      <div id="projects" className="section ">
        <h1>Projects</h1>
        <div className="d-flex justify-content-center">
          <Card className="project-card">
            <Card.Img className="img-project" variant="top" />
            <Card.Body>
              <Card.Title>Social Media App</Card.Title>
              <Card.Text>
                A social media app made using the MERNG stack (MongoDB, Express,
                React.js, Node.js and GraphQL)
              </Card.Text>
              <Button
                variant="primary"
                href="https://github.com/Lin-Michael/Social-Media-App-1"
              >
                See Project
              </Button>
            </Card.Body>
          </Card>

          <Card className="project-card">
            <Card.Img className="img-project" variant="top" src={ShoppingList} />
            <Card.Body>
              <Card.Title>Shopping List Web App</Card.Title>
              <Card.Text>
                A grocery shopping list static web application built using
                React.js.
              </Card.Text>
              <Button
                variant="primary"
                href="https://lin-michael.github.io/react_shopping_list/"
              >
                See Project
              </Button>
            </Card.Body>
          </Card>

          <Card className="project-card">
            <Card.Img className="img-project" variant="top" src={Arm} />
            <Card.Body>
              <Card.Title>6-axis robotic arm</Card.Title>
              <Card.Text>
                A 6-axis robotic arm with gesture control made using servo
                motors and Arduino Uno boards.
              </Card.Text>
              <Button
                variant="primary"
                href="https://devpost.com/software/h-arms-way"
              >
                See Project
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default Projects;
