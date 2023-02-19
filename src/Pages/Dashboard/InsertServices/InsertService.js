import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import useStore from "../../../hooks/useStore";
import "./InsertService.css";

const InsertService = () => {
  const { user } = useStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const insertService = { ...data, email: user.email };
    const isServiceAdded = window.confirm("Are you sure add the service?");
    if (isServiceAdded) {
      fetch("https://mdbappymia-my-portfolio-server.onrender.com/services", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(insertService),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.acknowledged) {
            alert("Service Added Successfully");
          }
        });
    }
  };

  return (
    <div className="bg-black insert-service-page">
      <h1 className="text-center fw-bold my-3">Add a New Service</h1>
      <form className="mx-5 bg-black" onSubmit={handleSubmit(onSubmit)}>
        <label>Service Name:</label>
        <input
          className="form-control"
          {...register("name", { required: true })}
        />
        {errors.name && <span>This field is required</span>}
        <br />
        <label>Icon Class FA:</label>
        <input
          className="form-control"
          {...register("icon", { required: true })}
        />
        {errors.icon && <span>This field is required</span>}
        <br />
        <label>Description:</label>
        <textarea
          className="form-control"
          {...register("description", { required: true })}
        />
        {errors.description && <span>This field is required</span>}
        <br />

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default InsertService;
