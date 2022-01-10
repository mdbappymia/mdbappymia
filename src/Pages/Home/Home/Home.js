import React from "react";
import { Spinner } from "react-bootstrap";
import useStore from "../../../hooks/useStore";
import AppBar from "../../Shared/AppBar/AppBar";
import Footer from "../../Shared/Footer/Footer";
import About from "../About/About";
import Address from "../Address/Address";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import LatestBlog from "../LatestBlog/LatestBlog";
import Projects from "../Projects/Projects";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";
import "./Home.css";

const Home = () => {
  const { reviews } = useStore();
  if (!reviews.length) {
    return (
      <div className="pre-loader">
        <div className="text-center">
          <Spinner className="fs-1" animation="border" />
          <br />
          <h1>Loading...</h1>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-dark">
      <Address />
      <AppBar></AppBar>
      <Header></Header>
      <About></About>
      <Skills></Skills>
      <Services></Services>
      <Projects></Projects>
      <LatestBlog></LatestBlog>
      <Contact></Contact>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
