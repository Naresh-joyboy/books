import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './hole.css'
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Navbars = () => {
  return (
    <div>
       <Navbar bg="primary" data-bs-theme="primary">
        <Container className='total'>
          <Navbar.Brand to="/">Books</Navbar.Brand>
          <Nav className="me-auto">
            <Link className='link' to="/">Home</Link>
            <Link className='link' to="/categore">Categories</Link>
            <Link className='link' to="/signup">Signup</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbars