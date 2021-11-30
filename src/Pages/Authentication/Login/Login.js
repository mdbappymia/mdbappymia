import React from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import useStore from "../../../hooks/useStore";
import "./Login.css";

const Login = () => {
  const { signInUsingEmailAndPassword } = useStore();
  let location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    signInUsingEmailAndPassword(data.email, data.password, navigate, from);
  };
  return (
    <div className="bg-black signup-page">
      <h1 className="title-heading text-center pt-5">Please Signup</h1>
      <form className="signup-form py-5" onSubmit={handleSubmit(onSubmit)}>
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
          {...register("password", { required: true })}
        />
        {errors.password1 && <span>This field is required</span>}

        <button className="btn btn-primary form-control my-3" type="submit">
          Log In
        </button>
      </form>
      <h5 className="text-center pb-5">
        Already Login? Please <Link to="/signup">Sign Up</Link>
      </h5>
    </div>
  );
};

export default Login;
