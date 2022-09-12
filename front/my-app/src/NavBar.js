import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
const NavBar = (props) => {
  return (
    <Navbar bg="info" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Django With React CRUD Samp |</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home |</Nav.Link>
        
        <Nav.Link href="#link" style={{ color: "blue" }}>Number of books:{props.book.length}</Nav.Link>
        
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavBar