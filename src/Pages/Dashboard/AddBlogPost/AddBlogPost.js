import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import useStore from "../../../hooks/useStore";

const AddBlogPost = () => {
  const { user } = useStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (!data.img) {
      data.img =
        "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
    }
    const addBlogPost = { ...data, email: user.email, name: user.displayName };
    console.log(addBlogPost);
  };
  return (
    <div className=" bg-black pb-5">
      <h1 className="text-center fw-bold py-5">Create a post</h1>
      <form className="mx-5" onSubmit={handleSubmit(onSubmit)}>
        <label>Title:</label>
        <input
          className="form-control"
          {...register("title", { required: true })}
        />
        {errors.title && <span>This field is required</span>}
        <br />
        <label>Image:</label>
        <input
          className="form-control"
          {...register("img", { required: true })}
        />
        {errors.img && <span>This field is required</span>}
        <br />
        <label>Description:</label>
        <textarea
          className="form-control"
          rows="10"
          {...register("description", { required: true })}
        />
        {errors.description && <span>This field is required</span>}
        <br />

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default AddBlogPost;
