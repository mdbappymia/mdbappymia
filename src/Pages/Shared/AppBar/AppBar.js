import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import useStore from "../../../hooks/useStore";
import { HashLink } from "react-router-hash-link";
import "./AppBar.css";

const AppBar = () => {
  const { user, logOut } = useStore();
  return (
    <Navbar variant="dark" bg="black" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/" className="brand-name">
          BAPPY
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={HashLink} to="/#home">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/#about">
              About
            </Nav.Link>
            <Nav.Link as={HashLink} to="/#skills">
              Skills
            </Nav.Link>
            <Nav.Link as={HashLink} to="/#services">
              Service
            </Nav.Link>
            <Nav.Link as={HashLink} to="/#projects">
              Projects
            </Nav.Link>
            <Nav.Link as={HashLink} to="/#blog">
              Blog
            </Nav.Link>
            <Nav.Link as={HashLink} to="/#contact">
              Contacts
            </Nav.Link>
          </Nav>
          {user.email && (
            <>
              <small>
                Login as: <span>{user.displayName}</span>
              </small>
              <button onClick={logOut} className="ms-2 btn btn-sm btn-danger">
                Logout
              </button>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppBar;
