import React, { useEffect, useState } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import "./ProjectDetails.css";

const ProjectDetails = ({ id }) => {
  const [project, setProject] = useState({});
  useEffect(() => {
    fetch(`https://mysterious-hollows-45831.herokuapp.com/projects/${id}`)
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, [id]);
  const {
    img,
    name,
    subtitle,
    liveLink,
    overview,
    technology,
    screenshots,
    codeLink,
  } = project;
  console.log(codeLink);
  return (
    <div className="bg-dark py-5">
      <Container>
        <h1 className="text-center fw-bold">{name}</h1>
        <p className="text-center">{subtitle}</p>
        <div className="project-img">
          <img src={img} alt="" />
        </div>
        <div className="text-center my-3">
          {codeLink?.length && (
            <>
              <a href={liveLink} target="_blank" rel="noreferrer">
                <Button className="mx-2">Live Site</Button>
              </a>
              <a href={codeLink[0] || "/"} target="_blank" rel="noreferrer">
                <Button className="mx-2">Client Side Code</Button>
              </a>
              <a href={codeLink[1] || "/"} target="_blank" rel="noreferrer">
                <Button className="mx-2">Server Side Code</Button>
              </a>
            </>
          )}
        </div>
        <h3>Site Overview</h3>
        {overview?.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
        <Row>
          <h3 className="my-3">Technology Used</h3>
          {technology?.map((tec, index) => (
            <Col key={index} sm={12} md={4} lg={2}>
              <li>{tec}</li>
            </Col>
          ))}
        </Row>
        <h3 className="my-5 pt-5 text-center">Project Screenshot</h3>
        <Row>
          {screenshots?.map((screenshot, index) => (
            <Col key={index} sm={12} lg={4}>
              <img className="img-fluid" src={screenshot} alt="" />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProjectDetails;
