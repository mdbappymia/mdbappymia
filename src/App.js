import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import "./App.css";
import AllProvider from "./contexts/AllProvider";
import Signup from "./Pages/Authentication/Signup/Signup";
import Login from "./Pages/Authentication/Login/Login";
import InsertService from "./Pages/Dashboard/InsertServices/InsertService";
import InsertProject from "./Pages/Dashboard/InsertProject/InsertProject";
import ProjectDetailsHome from "./Pages/ProjectDetails/ProjectDetailsHome/ProjectDetailsHome";
import AddBlogPost from "./Pages/Dashboard/AddBlogPost/AddBlogPost";

const App = () => {
  return (
    <AllProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/insert-service" element={<InsertService />} />
          <Route path="/insert-project" element={<InsertProject />} />
          <Route path="/projects/:id" element={<ProjectDetailsHome />} />
          <Route path="/add-blog-post" element={<AddBlogPost />} />
        </Routes>
      </BrowserRouter>
    </AllProvider>
  );
};

export default App;
