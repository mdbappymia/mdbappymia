import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import "./BlogDetails.css";

const BlogDetails = ({ id }) => {
  const [blog, setBlog] = useState({});
  const [recall, setRecall] = useState(false);
  useEffect(() => {
    fetch(`https://mdbappymia-my-portfolio-server.onrender.com/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch((e) => {
        setRecall(!recall);
      });
  }, [id, recall]);
  const { title, img, description, date, name, email } = blog;
  return (
    <div className="bg-dark py-5">
      {blog.title ? (
        <Container>
          <div>
            <h5>Date: {date}</h5>
            <h6>
              Posted by <span>{name}</span>
            </h6>
            <p>Email: {email}</p>
          </div>
          <div className="blog-details-img">
            <img src={img} alt="" />
          </div>
          <h2>{title}</h2>
          <div>{ReactHtmlParser(description)}</div>
        </Container>
      ) : (
        <div className="my-5 text-center">
          <Spinner animation="grow" variant="light" />
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
