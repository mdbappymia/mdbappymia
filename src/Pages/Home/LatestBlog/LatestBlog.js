import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Card, Col, Container, Row, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import useStore from "../../../hooks/useStore";
import "./LatestBlog.css";

const LatestBlog = () => {
  const { blogs } = useStore();
  return (
    <div id="blog" className="pb-5">
      <Container>
        <h1 className="text-center fw-bold my-5">Latest blogs</h1>
        {blogs.length ? (
          <Row>
            {blogs.map((blog, index) => (
              <Col className="mb-3" md={6} sm={12} lg={4} key={blog._id}>
                <ScrollAnimation delay={(index + 1) * 100} animateIn="fadeInUp">
                  <Card className="bg-black">
                    <Card.Img height="200" variant="top" src={blog.img} />
                    <Card.Body>
                      <Card.Title>{blog.title}</Card.Title>
                      <Link to={`/blogs/${blog._id}`}>
                        <Button variant="primary">View Post</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </ScrollAnimation>
              </Col>
            ))}
          </Row>
        ) : (
          <div className="text-center my-4">
            <Spinner animation="grow" />
          </div>
        )}
      </Container>
    </div>
  );
};

export default LatestBlog;
