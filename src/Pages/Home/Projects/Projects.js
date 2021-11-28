import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div id="projects" className="bg-black pb-5">
      <Container>
        <h1 className="text-center fw-bold py-5">My Projects</h1>
        <Row className="text-center">
          {projects.map((project) => (
            <Col sm={12} md={6} lg={3}>
              <Card className="bg-dark">
                <Card.Img variant="top" src={project.img} />
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Text>{project.overview[0]}</Card.Text>
                  <Link to={`/projects/${project._id}`}>
                    <Button variant="primary">View Details</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
