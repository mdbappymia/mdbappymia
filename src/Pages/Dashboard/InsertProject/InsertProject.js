import React from "react";
import { Container, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useStore from "../../../hooks/useStore";
import "./InsertProject.css";

const InsertProject = () => {
  const { user } = useStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const screenshots = data.images.split(",");
    const overview = data.overview.split(".");
    const technology = data.technology.split(",");
    const codeLink = data.codeLink.split(",");
    console.log(screenshots);
    const insertProject = {
      name: data.name,
      subtitle: data.subtitle,
      email: user.email,
      img: data.img,
      screenshots: screenshots,
      overview: overview,
      technology: technology,
      codeLink: codeLink,
      liveLink: data.liveLink,
    };
    console.log(insertProject);
    const isProjectAdd = window.confirm("Are you sure add the project?");
    if (isProjectAdd) {
      fetch("https://mysterious-hollows-45831.herokuapp.com/projects", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(insertProject),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.acknowledged) {
            alert("Product added Successfully");
            reset();
          }
        });
    }
  };
  return (
    <div className="bg-dark py-5">
      <h1 className="text-center py-5">Insert a new Project</h1>
      <Container>
        <form className="mx-5 bg-dark" onSubmit={handleSubmit(onSubmit)}>
          <label>Project Name:</label>
          <input
            className="form-control"
            {...register("name", { required: true })}
          />
          {errors.name && <span>This field is required</span>}
          <br />
          <label>Project Subtitle:</label>
          <input
            className="form-control"
            {...register("subtitle", { required: true })}
          />
          {errors.subtitle && <span>This field is required</span>}
          <br />
          <label>Live Link:</label>
          <input
            className="form-control"
            {...register("liveLink", { required: true })}
          />
          {errors.liveLink && <span>This field is required</span>}
          <br />
          <label>Code Link separate by comma client, server:</label>
          <input
            className="form-control"
            {...register("codeLink", { required: true })}
          />
          {errors.codeLink && <span>This field is required</span>}
          <br />
          <label>Project Image:</label>
          <input
            className="form-control"
            {...register("img", { required: true })}
          />
          {errors.img && <span>This field is required</span>}
          <br />
          <label>Project Screenshot image link separate by comma:</label>
          <input
            className="form-control"
            {...register("images", { required: true })}
          />
          {errors.images && <span>This field is required</span>}

          <br />
          <label>Overview separate by . :</label>
          <textarea
            className="form-control"
            rows="20"
            {...register("overview", { required: true })}
          />
          {errors.overview && <span>This field is required</span>}
          <br />
          <label>Technology separate by comma:</label>
          <input
            className="form-control"
            {...register("technology", { required: true })}
          />
          {errors.technology && <span>This field is required</span>}
          <br />
          <Button className="my-3" type="submit">
            Submit
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default InsertProject;
