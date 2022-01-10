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
import BlogDetailsHome from "./Pages/BlogDetails/BlogDetailsHome/BlogDetailsHome";
import GiveReview from "./Pages/GiveReview/GiveReview";
import PrivetRoute from "./Pages/Authentication/PrivetRoute/PrivetRoute";

const App = () => {
  return (
    <AllProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/insert-service"
            element={
              <PrivetRoute>
                <InsertService />
              </PrivetRoute>
            }
          />
          <Route
            path="/insert-project"
            element={
              <PrivetRoute>
                <InsertProject />
              </PrivetRoute>
            }
          />
          <Route
            path="/add-blog-post"
            element={
              <PrivetRoute>
                <AddBlogPost />
              </PrivetRoute>
            }
          />
          <Route path="/projects/:id" element={<ProjectDetailsHome />} />
          <Route path="/blogs/:id" element={<BlogDetailsHome />} />
          <Route path="/review" element={<GiveReview />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AllProvider>
  );
};

export default App;
