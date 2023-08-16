import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

function NavigationBar() {
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>React Rails</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => navigate("/")}>Arena</Nav.Link>
          <Nav.Link onClick={() => navigate("/warriors")}>Warrior List</Nav.Link>
          <Nav.Link onClick={() => navigate("/historics")}>Historics</Nav.Link>
          <Nav.Link onClick={() => navigate("/weapons")}>Items</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
