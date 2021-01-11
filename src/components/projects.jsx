import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

import MERNGStack from "../img/projects/merng_stack.PNG";
import ShoppingList from "../img/projects/shopping_list.PNG";
import Arm from "../img/projects/arm.png";
import NoteProject from "../img/projects/note-app/note_page.PNG";
class Projects extends Component {
  state = {};
  render() {
    return (
      <div className="">
        <h1 id="projects">Projects</h1>
        <div className="d-flex project-container justify-content-center">
          <Card className="project-card">
            <Card.Img className="img-project" src={MERNGStack} variant="top" />
            <Card.Body>
              <Card.Title className="font-weight-bold">
                Social Media App
              </Card.Title>
              <Card.Text>
                <p className="font-italic">
                  MERNG stack (MongoDB, Express, React.js, Node.js and GraphQL)
                </p>
                <p className="font-weight-bold">Description:</p>
                This social media app allows users to create an account, login,
                logout, perform CRUD operations for user posts and show a feed.
                While logged in, an authentication token is generated so that
                MongoDB can ensure that only the user has access to unique
                content. This uses a react based user interface template library
                called Semantic-UI to render the HTML, using react components. I
                created this by following alongside a video tutorial. I wanted
                to learn how the different technologies worked together in hopes
                to gain an understanding of the broader picture in terms of the
                front end and back end infrastructure. My goal for the future
                would be to gain an in depth understanding of each of these
                technologies, that way I can make my own personal social media
                application.
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
            <Card.Img
              className="img-project"
              variant="top"
              src={ShoppingList}
            />
            <Card.Body>
              <Card.Title className="font-weight-bold">
                Shopping List Web App
              </Card.Title>
              <Card.Text>
                <p className="font-italic">React.js, bootstrap</p>
                <br></br>
                <p className="font-weight-bold">Description: </p>A grocery
                shopping list static web application.
                <br></br>
                <br></br>I built this app to test my knowledge of React.js after
                reading the documentation. In this app, the user can perform
                CRUD operations on shopping list items. I organized it such that
                the shopping list itself is the parent, and each item is a child
                of the parent. All of the information is stored within the
                parent component as an array in order to ensure a single data
                source of truth. In the navbar, I created an item count, similar
                to what you might see in an online store. It counts the number
                of non-zero shopping list items. I added validation so that you
                can only increment items in the cart if they have a name. This
                app is fully deployed using github pages.
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
            <Card.Img className="img-project" variant="top" src={NoteProject} />
            <Card.Body>
              <Card.Title className="font-weight-bold">
                Note taking app
              </Card.Title>
              <Card.Text>
                <p className="font-italic">AWS Amplify, React.js, GraphQL</p>
                <br></br>
                <p className="font-weight-bold">Description:</p>A full stack
                react application where users can make an account to create
                notes with an option for attaching pictures. I used the
                pre-built AWS functionality to supply the user authentication,
                which includes creating user accounts, logging in, MFA and
                logging out. It uses the AWS storage service to store the text
                and image data. GraphQL is used to query the database and
                perform CRUD operations in a way that is easy to manage from the
                front end. Using AWS amplify was a lot of fun because it took
                care of all of the deployment. Unfortunately, the deployment did
                not build on the server, however I do have access to the back
                end resources including user management and information storage
                from within my development environment.
              </Card.Text>
              <Button
                variant="primary"
                href="https://github.com/Lin-Michael/note-app"
              >
                See Project
              </Button>
            </Card.Body>
          </Card>

          <Card className="project-card">
            <Card.Img className="img-project" variant="top" src={Arm} />
            <Card.Body>
              <Card.Title className="font-weight-bold">
                6-axis robotic arm
              </Card.Title>
              <Card.Text>
                <p className="font-italic">
                  C++, I2C, Arduino, RF transmitters
                </p>
                <br></br>
                <p className="font-weight-bold">Description:</p>A 6-axis robotic
                arm with gesture control made using servo motors and Arduino Uno
                boards. Made at Hack the North 2019 with a group of 5.
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
