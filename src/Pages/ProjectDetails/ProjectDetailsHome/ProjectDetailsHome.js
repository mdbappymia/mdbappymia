import React from "react";
import { useParams } from "react-router";
import AppBar from "../../Shared/AppBar/AppBar";
import Footer from "../../Shared/Footer/Footer";
import ProjectDetails from "../ProjectDetails/ProjectDetails";

const ProjectDetailsHome = () => {
  const { id } = useParams();
  return (
    <div>
      <AppBar></AppBar>
      <ProjectDetails id={id}></ProjectDetails>
      <Footer></Footer>
    </div>
  );
};

export default ProjectDetailsHome;
