import React, { useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Card, Col, Container, Row, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LatestBlog.css";

const LatestBlog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://mysterious-hollows-45831.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div id="blog" className="pb-5">
      <Container>
        <h1 className="text-center fw-bold my-5">Latest blogs</h1>
        {!blogs.length ? (
          <div className="text-center my-4">
            <Spinner animation="grow" />
          </div>
        ) : (
          <Row>
            {blogs.map((blog, index) => (
              <Col md={6} sm={12} lg={4} key={blog._id}>
                <ScrollAnimation delay={(index + 1) * 100} animateIn="fadeInUp">
                  <Card className="bg-black">
                    <Card.Img height="200" variant="top" src={blog.img} />
                    <Card.Body>
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text>{blog.description.slice(0, 100)}...</Card.Text>
                      <Link to={`/blogs/${blog._id}`}>
                        <Button variant="primary">View Post</Button>
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

export default LatestBlog;
