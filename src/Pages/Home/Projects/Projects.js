import React, { useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Card, Col, Container, Row, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("https://mysterious-hollows-45831.herokuapp.com/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  console.log(projects);
  return (
    <div id="projects" className="bg-black pb-5">
      <Container>
        <h1 className="text-center fw-bold py-5">My Projects</h1>

        {!projects.length ? (
          <div className="text-center my-4">
            <Spinner animation="grow" />
          </div>
        ) : (
          <Row className="text-center">
            {projects.map((project, index) => (
              <Col sm={12} md={6} lg={3} key={project._id}>
                <ScrollAnimation delay={(index + 1) * 100} animateIn="fadeIn">
                  <Card className="bg-dark project-card">
                    <Card.Img
                      className="project-card-img"
                      variant="top"
                      src={project.img}
                    />
                    <Card.Body>
                      <Card.Title>{project.name}</Card.Title>
                      <Card.Text>{project.subtitle}</Card.Text>
                      <Link to={`/projects/${project._id}`}>
                        <Button variant="primary">View Details</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </ScrollAnimation>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Projects;
