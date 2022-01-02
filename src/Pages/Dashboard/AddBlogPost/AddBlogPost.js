import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import useStore from "../../../hooks/useStore";

const AddBlogPost = () => {
  const { user } = useStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (!data.img) {
      data.img =
        "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
    }
    const isPost = window.confirm("Are you sure added the post?");
    if (isPost) {
      const date = new Date();
      const post_date = date.toDateString();
      const addBlogPost = {
        ...data,
        email: user.email,
        name: user.displayName,
        date: post_date,
      };
      console.log(addBlogPost);
      fetch("https://mysterious-hollows-45831.herokuapp.com/blogs", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addBlogPost),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.acknowledged) {
            alert("Successfully posted");
            reset();
          }
        });
    }
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
        <label>Description (you can insert html code):</label>
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
