import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";

function Bnavbar() {
  return (
    <>
      <Navbar bg="dark" variant={"dark"} expand="lg">
        <Container>
          <Navbar.Brand href="#home">Rising Information</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/"}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/search"}>
                Search
              </Nav.Link>
              <Nav.Link as={Link} to={"/aboutme"}>
                About Me
              </Nav.Link>
              <Nav.Link as={Link} to={"/feedback"}>
                Feedback
              </Nav.Link>
              <NavDropdown title="Genres" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to={"/search"}>
                  Horror
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/search"}>
                  Historical Fiction
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/search"}>
                  Comic Book
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to={"/search"}>
                  Action and Adventure.
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Bnavbar;
