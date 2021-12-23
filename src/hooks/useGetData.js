import { useEffect, useState } from "react";

const useGetData = () => {
  const [blogs, setBlogs] = useState([]);
  const [projects, setProjects] = useState([]);
  const [services, setServices] = useState([]);
  const [reviews, setReviews] = useState([]);
  //   blogs data
  useEffect(() => {
    fetch("https://mysterious-hollows-45831.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data.reverse()));
  }, []);

  //   projects data

  useEffect(() => {
    fetch("https://mysterious-hollows-45831.herokuapp.com/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  //   service data

  useEffect(() => {
    fetch("https://mysterious-hollows-45831.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  //   Reviews data

  useEffect(() => {
    fetch("https://mysterious-hollows-45831.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return { blogs, projects, services, reviews };
};

export default useGetData;
