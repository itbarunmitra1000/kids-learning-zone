import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Nav className="justify-content-center bg-gray " activeKey="/home">
        <Nav.Item>
          <Nav.Link to="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/home">Service</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/home">About Us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/home">Contact Us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          
        </Nav.Item>
      </Nav>
    );
};

export default Header;