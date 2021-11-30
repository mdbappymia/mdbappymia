import React, { useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://mysterious-hollows-45831.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div id="services" className="pb-5">
      <h1 className="text-center fw-bold my-5">My Services</h1>
      <Container>
        <ScrollAnimation delay={300} animateIn="fadeIn">
          <Row className="text-center">
            {services.map((service) => (
              <Col lg={3} md={6} sm={12} key={service._id}>
                <Card className="bg-black service-card mb-3">
                  <div className="service-icon">
                    <i className={service.icon}></i>
                  </div>
                  <Card.Body>
                    <Card.Title>{service.name}</Card.Title>
                    <Card.Text className="text-secondary">
                      {service.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </ScrollAnimation>
      </Container>
    </div>
  );
};

export default Services;
