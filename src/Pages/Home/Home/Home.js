import React from "react";
import AppBar from "../../Shared/AppBar/AppBar";
import Footer from "../../Shared/Footer/Footer";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import LatestBlog from "../LatestBlog/LatestBlog";
import Projects from "../Projects/Projects";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div className="bg-dark">
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
