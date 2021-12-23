import React from "react";
import { Container, Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import "./Reviews.css";
import useStore from "../../../hooks/useStore";

const Reviews = () => {
  const { reviews } = useStore();
  return (
    <div id="reviews">
      <Container>
        <h1 className="text-center fw-bold my-5">My Site Review</h1>

        {reviews.length ? (
          <Carousel
            indicators={false}
            interval={1000}
            className="my-5 review-part"
          >
            {reviews.map((review) => (
              <Carousel.Item className="text-center " key={review._id}>
                <h3>{review.name}</h3>
                <span>
                  Rate:{" "}
                  <Rating
                    readonly
                    initialRating={review.rate}
                    emptySymbol={<i className="far fa-star text-warning"></i>}
                    fullSymbol={<i className="fas fa-star text-warning"></i>}
                  />
                </span>
                <p>{review.message}</p>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <>Loading</>
        )}

        <div className="text-center mb-4">
          <Link to="/review">
            <Button variant="success">Give a review</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Reviews;
