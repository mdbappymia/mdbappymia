import React from "react";
import { Carousel, Col, Container, Row, Button } from "react-bootstrap";
import headerImg from "./../../../Resourses/image/my-Pic-removebg-preview.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="bg-black text-light" id="home">
      <Container>
        <Row>
          <Col md={12} lg={6} className="d-flex align-items-center">
            <div>
              <p className="text-uppercase text-secondary mt-5">
                Welcome to my World
              </p>
              <h1 className="mt-3 fw-bold my-name">
                Hi, I'm <span className="text-warning">Md. Bappy Mia</span>
              </h1>
              <Carousel
                className="my-3"
                fade
                controls={false}
                indicators={false}
                interval={1000}
              >
                <Carousel.Item>
                  <h4>React Developer</h4>
                </Carousel.Item>
                <Carousel.Item>
                  <h4>MERN stack developer</h4>
                </Carousel.Item>
                <Carousel.Item>
                  <h4>Full stack Web Developer</h4>
                </Carousel.Item>
                <Carousel.Item>
                  <h4>Programmer</h4>
                </Carousel.Item>
                <Carousel.Item>
                  <h4>Javascript Developer</h4>
                </Carousel.Item>
              </Carousel>
              <a
                className="d-block mt-4"
                href="https://doc-0o-bg-docs.googleusercontent.com/docs/securesc/kll3d7ntsaj3lb6rl3fnbbubef2cdsib/qa7i5gmv9ok4kpgi9nilt8b7eggfj571/1637741475000/05943190864305863752/05943190864305863752/1AhGHpU1kKeSJ23cLFv__SccXPJbyr-aI?e=download&authuser=1&nonce=1ueludmd5ufsq&user=05943190864305863752&hash=8jt1iu950nv9d9hluiu7cjqjk9n7rie8"
                download
              >
                <Button>Download Resume</Button>
              </a>
            </div>
          </Col>
          <Col md={12} lg={6} className="text-center">
            <img className="w-75" src={headerImg} alt="Header" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
