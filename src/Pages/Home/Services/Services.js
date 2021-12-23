import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import useStore from "../../../hooks/useStore";
import "./Services.css";

const Services = () => {
  const { services } = useStore();
  return (
    <div id="services" className="pb-5">
      <h1 className="text-center fw-bold my-5">My Services</h1>

      {services.length ? (
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
      ) : (
        <div className="text-center my-4">
          <Spinner animation="grow" />
        </div>
      )}
    </div>
  );
};

export default Services;
