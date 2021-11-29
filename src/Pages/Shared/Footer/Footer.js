import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="bg-black">
      <Container className="d-flex justify-content-between">
        <h3 className=" py-5">MD. BAPPY MIA</h3>
        <p className=" py-5 mt-2 text-secondary">
          2021 Copyright &copy; All right received
        </p>
      </Container>
    </div>
  );
};

export default Footer;
