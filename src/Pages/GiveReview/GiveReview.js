import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Rating from "react-rating";

const GiveReview = () => {
  const [rate, setRate] = useState(5);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  console.log(rate);
  const submitReview = (e) => {
    e.preventDefault();
    const review = {
      rate: rate,
      name: name,
      message: message,
      status: "pending",
    };
    const isReview = window.confirm("Are you sure information is correct?");
    if (isReview) {
      fetch("https://mysterious-hollows-45831.herokuapp.com/reviews", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(review),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.acknowledged) {
            alert("Review added successfully");
            e.target.reset();
            navigate("/#reviews");
          }
        });
    }
    console.log(review);
  };
  return (
    <div className="bg-dark pb-5">
      <Container>
        <h1 className="text-center py-5">Review</h1>
        <div className="text-center fs-3">
          <label>Your Rate: {rate}</label>
          <br />
          <Rating
            initialRating={rate}
            onClick={(value) => setRate(value)}
            emptySymbol={<i className="far fa-star text-warning"></i>}
            fullSymbol={<i className="fas fa-star text-warning"></i>}
          />
        </div>
        <br />
        <form onSubmit={submitReview}>
          <label>Your Name:</label>
          <input
            onBlur={(e) => setName(e.target.value)}
            className="form-control"
            type="text"
          ></input>
          <br />
          <label>Your Message:</label>
          <textarea
            onBlur={(e) => setMessage(e.target.value)}
            className="form-control"
            rows="5"
          ></textarea>
          <Button type="submit" className="mt-3 px-5 mb-5">
            Submit
          </Button>
        </form>
        <h3 className="my-3">
          <Link to="/">Back to home</Link>
        </h3>
      </Container>
    </div>
  );
};

export default GiveReview;
