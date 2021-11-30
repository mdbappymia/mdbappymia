import React, { useState } from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import "./About.css";
import aboutPic from "../../../Resourses/image/bappy.jpg";
import ScrollAnimation from "react-animate-on-scroll";

const About = () => {
  const [key, setKey] = useState("education");
  return (
    <div className="bg-dark py-3" id="about">
      <Container>
        <Row>
          <h1 className="text-center my-5 title-heading">About Me</h1>
          <Col md={12} lg={6}>
            <ScrollAnimation animateIn="flipInY">
              <img className="w-75" src={aboutPic} alt="" />
            </ScrollAnimation>
          </Col>
          <Col md={12} lg={6}>
            <ScrollAnimation animateIn="bounceInRight">
              <h5>Who I am</h5>
              <p>
                This is Bappy is a professional web developer. I am a student of
                electronic and communication engineering but I like to do
                programming very much. I like the javascript programming
                language. At last, I selected the web development journey on my
                profession.
              </p>
              <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
                activeKey={key}
                onSelect={(k) => setKey(k)}
              >
                <Tab eventKey="education" title="Education">
                  <h4 className="fw-light">
                    B.Sc Engineering in{" "}
                    <span className="fw-bold">
                      Electronics & Communication Engineering
                    </span>{" "}
                    at Hajee Mohammad Danesh Science and Technology University
                  </h4>
                  <p>
                    <li>2016-2019</li>
                  </p>
                </Tab>
                <Tab eventKey="experience" title="Experience">
                  <h4 className="fw-light">
                    Complete wev development course at{" "}
                    <span className="fw-bold">Programming hero</span>
                  </h4>
                  <p>
                    <li>June 2021- Dec 2021</li>
                  </p>
                  <h4 className="fw-light">
                    Student intern at{" "}
                    <span className="fw-bold">Dinajpur BTCL</span>
                  </h4>
                  <p>
                    <li>Feb 2021- Mar 2021</li>
                  </p>
                </Tab>
                <Tab eventKey="achievement" title="Achievement">
                  <h4 className="fw-light">
                    Award a certificate{" "}
                    <span className="fw-bold">
                      Basic Linux Administration and Career Discussion
                    </span>{" "}
                    conducted by Mohammad Imran, Senior system engineer, Agni
                    System Limited.
                  </h4>
                </Tab>
              </Tabs>
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
