import React from "react";
import { Container } from "react-bootstrap";

const Address = () => {
  return (
    <div className="py-4">
      <Container className="d-flex justify-content-between">
        <p className="m-0">Address: Dhaka, Bangladesh</p>
        <div>
          <p className="m-0">Phone: +8801732249303</p>
          <p className="m-0">Email: mdbappymia.hstu@gmail.com</p>
        </div>
      </Container>
    </div>
  );
};

export default Address;
