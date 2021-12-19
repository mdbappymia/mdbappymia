import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import "./BlogDetails.css";

const BlogDetails = ({ id }) => {
  const [blog, setBlog] = useState({});
  useEffect(() => {
    fetch(`https://mysterious-hollows-45831.herokuapp.com/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, [id]);
  const { title, img, description, date, name, email } = blog;
  return (
    <div className="bg-dark py-5">
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
    </div>
  );
};

export default BlogDetails;
