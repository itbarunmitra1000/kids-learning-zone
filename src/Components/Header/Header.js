import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/home" className='text-warning'>Kids Learning Zone</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/services">Services</Nav.Link>
          <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>
          <Nav.Link as={NavLink} to="/contact">Contact Us</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;