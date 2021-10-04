import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Nav className="justify-content-center bg-gray " activeKey="/home">
        <Nav.Item>
          <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/services">Services</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/contact">Contact Us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          
        </Nav.Item>
      </Nav>
    );
};

export default Header;