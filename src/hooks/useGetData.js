import { useEffect, useState } from "react";

const useGetData = () => {
  const [blogs, setBlogs] = useState([]);
  const [projects, setProjects] = useState([]);
  const [services, setServices] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [recall, setRecall] = useState(false);
  // blogs data
  useEffect(() => {
    fetch("https://mysterious-hollows-45831.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.reverse());
        fetch("https://mysterious-hollows-45831.herokuapp.com/projects")
          .then((res) => res.json())
          .then((data) => {
            setProjects(data);
            fetch("https://mysterious-hollows-45831.herokuapp.com/services")
              .then((res) => res.json())
              .then((data) => {
                setServices(data);
                fetch("https://mysterious-hollows-45831.herokuapp.com/reviews")
                  .then((res) => res.json())
                  .then((data) => setReviews(data));
              });
          });
      })
      .catch(() => setRecall(!recall));
  }, [recall]);

  // const getAllDate = async () => {
  //   const servicesDate = await fetch(
  //     "https://mysterious-hollows-45831.herokuapp.com/services"
  //   )
  //     .then((res) => res.json())
  //     .catch(() => setRecall(!recall));
  //   setServices(servicesDate);
  //   const projectsData = await fetch(
  //     "https://mysterious-hollows-45831.herokuapp.com/projects"
  //   ).then((res) => res.json());
  //   setProjects(projectsData);
  //   const blogsData = await fetch(
  //     "https://mysterious-hollows-45831.herokuapp.com/blogs"
  //   ).then((res) => res.json());
  //   setBlogs(blogsData.reverse());
  //   const reviewsData = await fetch(
  //     "https://mysterious-hollows-45831.herokuapp.com/reviews"
  //   ).then((res) => res.json());
  //   setReviews(reviewsData);
  // };
  // useEffect(() => {
  //   getAllDate();
  // }, [recall, getAllDate]);
  return { blogs, projects, services, reviews };
};

export default useGetData;
