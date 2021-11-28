import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useStore from "../../../hooks/useStore";
import "./Signup.css";

const Signup = () => {
  const { signUpUsingEmailAndPassword } = useStore();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.password1 === data.password2) {
      signUpUsingEmailAndPassword(
        data.email,
        data.password1,
        data.name,
        navigate
      );
    } else {
      alert("Password Not Match");
    }
    console.log(data);
  };

  return (
    <div className="bg-black signup-page">
      <h1 className="title-heading text-center pt-5">Please Signup</h1>
      <form className="signup-form py-5" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-control my-3"
          placeholder="Your Name"
          {...register("name", { required: true })}
        />
        {errors.name && <span>This field is required</span>}
        <input
          className="form-control my-3"
          type="email"
          placeholder="Your Email"
          {...register("email", { required: true })}
        />
        {errors.email && <span>This field is required</span>}
        <input
          className="form-control my-3"
          type="password"
          placeholder="Your Password"
          {...register("password1", { required: true })}
        />
        {errors.password1 && <span>This field is required</span>}
        <input
          className="form-control my-3"
          type="password"
          placeholder="Retype Your Password"
          {...register("password2", { required: true })}
        />
        {errors.password2 && <span>This field is required</span>}

        <button className="btn btn-primary form-control my-3" type="submit">
          Sign Up
        </button>
      </form>
      <h5 className="text-center pb-5">
        Already Sign Up? Please <Link to="/login">Login</Link>
      </h5>
    </div>
  );
};

export default Signup;
