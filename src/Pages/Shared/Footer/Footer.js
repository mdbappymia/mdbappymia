import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-black">
      <Container className="footer-page-content">
        <h3 className=" py-md-5 pt-3">MD. BAPPY MIA</h3>
        <p className="pb-sm-3 py-md-5 pt-3 m-0 text-secondary">
          2021 Copyright &copy; All right received
        </p>
      </Container>
    </div>
  );
};

export default Footer;
