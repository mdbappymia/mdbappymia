import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="bg-black pb-5" id="skills">
      <Container>
        <h3 className="title-heading text-center py-5">Skills</h3>
        <ScrollAnimation animateIn="fadeInUp">
          <Row>
            <Col lg={6} md={12} className="my-3">
              <div className="single-skill-area">
                <h4>React JS</h4>
                <ProgressBar now={80} label={`${80}%`} />
              </div>
            </Col>
            <Col lg={6} md={12} className="my-3">
              <div className="single-skill-area">
                <h4>JavaScript</h4>
                <ProgressBar now={90} label={`${90}%`} />
              </div>
            </Col>
            <Col lg={6} md={12} className="my-3">
              <div className="single-skill-area">
                <h4>TypeScript</h4>
                <ProgressBar now={65} label={`${65}%`} />
              </div>
            </Col>
            <Col lg={6} md={12} className="my-3">
              <div className="single-skill-area">
                <h4>Node JS</h4>
                <ProgressBar now={70} label={`${70}%`} />
              </div>
            </Col>
            <Col lg={6} md={12} className="my-3">
              <div className="single-skill-area">
                <h4>Express JS</h4>
                <ProgressBar now={75} label={`${75}%`} />
              </div>
            </Col>
            <Col lg={6} md={12} className="my-3">
              <div className="single-skill-area">
                <h4>Mongo DB</h4>
                <ProgressBar now={70} label={`${70}%`} />
              </div>
            </Col>
            <Col lg={6} md={12} className="my-3">
              <div className="single-skill-area">
                <h4>React Bootstrap</h4>
                <ProgressBar now={95} label={`${95}%`} />
              </div>
            </Col>
            <Col lg={6} md={12} className="my-3">
              <div className="single-skill-area">
                <h4>HTML</h4>
                <ProgressBar now={90} label={`${90}%`} />
              </div>
            </Col>
            <Col lg={6} md={12} className="my-3">
              <div className="single-skill-area">
                <h4>CSS</h4>
                <ProgressBar now={95} label={`${95}%`} />
              </div>
            </Col>
            <Col lg={6} md={12} className="my-3">
              <div className="single-skill-area">
                <h4>Bootstrap</h4>
                <ProgressBar now={90} label={`${90}%`} />
              </div>
            </Col>
            <Col lg={6} md={12} className="my-3">
              <div className="single-skill-area">
                <h4>Material UI</h4>
                <ProgressBar now={70} label={`${70}%`} />
              </div>
            </Col>
            <Col lg={6} md={12} className="my-3">
              <div className="single-skill-area">
                <h4>Tailwind CSS</h4>
                <ProgressBar now={75} label={`${75}%`} />
              </div>
            </Col>
          </Row>
        </ScrollAnimation>
      </Container>
    </div>
  );
};

export default Skills;
