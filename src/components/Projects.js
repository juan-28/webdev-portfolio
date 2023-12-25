import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-music.png";
import projImg2 from "../assets/img/project-emotion.png";
import projImg3 from "../assets/img/project-taxi.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { Link } from "react-router-dom";

export const Projects = () => {
  const projects = [
    {
      title: "Music Recommendation System",
      description: "Big Data Analytics",
      imgUrl: projImg1,
      url: "https://github.com/juan-28/MusicRecSystem",
    },
    {
      title: "Emotion Recognition",
      description: "Deep Learning - Keras",
      imgUrl: projImg2,
      url: "https://github.com/juan-28/Emotion-Recognition-Keras",
    },
    {
      title: "NYC Taxi Big Data Visualization",
      description: "Big Data - Apache Spark, Zeppelin",
      imgUrl: projImg3,
      url: "",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div>
                  <h2>Projects</h2>
                  <p>
                    These are the projects that I have worked on the past year,
                    showcasing my interest and skills in data analytics and
                    machine learning.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Machine Learning</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          Big Data Analytics
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          Analytics Foundation
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p></p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
