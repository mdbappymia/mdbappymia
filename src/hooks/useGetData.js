import { useEffect, useState } from "react";

const useGetData = () => {
  const [blogs, setBlogs] = useState([]);
  const [projects, setProjects] = useState([]);
  const [services, setServices] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [preloading, setPreloading] = useState(true);

  useEffect(() => {
    fetch("https://mysterious-hollows-45831.herokuapp.com/allData")
      .then((res) => res.json())
      .then((data) => {
        setServices(data.services);
        setProjects(data.projects);
        setBlogs(data.blogs);
        setReviews(data.reviews);
      })
      .finally(() => setPreloading(false));
  }, []);

  return { blogs, projects, services, reviews, preloading };
};

export default useGetData;
