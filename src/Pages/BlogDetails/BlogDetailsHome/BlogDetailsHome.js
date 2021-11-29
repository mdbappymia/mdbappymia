import React from "react";
import { useParams } from "react-router";
import AppBar from "../../Shared/AppBar/AppBar";
import Footer from "../../Shared/Footer/Footer";
import BlogDetails from "../BlogDetails/BlogDetails";

const BlogDetailsHome = () => {
  const { id } = useParams();
  return (
    <div>
      <AppBar></AppBar>
      <BlogDetails id={id}></BlogDetails>
      <Footer></Footer>
    </div>
  );
};

export default BlogDetailsHome;
