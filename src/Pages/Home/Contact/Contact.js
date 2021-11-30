import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Button } from "react-bootstrap";
import "./Contact.css";
import { init } from "emailjs-com";
import { Container } from "react-bootstrap";
init("user_fAnUtEy67VKug7U1pCwE7");

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "md_bappy_mia",
        "template_w47gwgd",
        form.current,
        "user_fAnUtEy67VKug7U1pCwE7"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Send successfully");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="bg-black py-5" id="contact">
      <Container>
        <h1 className="text-center fw-bold">Contact Us</h1>
        <form className="bg-black" ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input className="form-control" type="text" name="name" />
          <label>Email</label>
          <input className="form-control" type="email" name="email" />
          <label>Message</label>
          <textarea className="form-control" name="message" rows="10" />
          <br />
          <Button className="px-5" type="submit">
            Send
          </Button>
        </form>
      </Container>
    </div>
  );
};
export default Contact;
