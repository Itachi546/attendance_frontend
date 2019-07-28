import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';

export default class Navigation extends Component {
  render() {
    return (
      <Navbar className="mt-5 mb-0 d-flex justify-content-end" collapseOnSelect expand="lg" style={{ backgroundColor: '#ED3B46'}}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: '#FFF' }} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link className="text-white" href="/">Home</Nav.Link>
            <Nav.Link className="text-white" href="/classes">Class</Nav.Link>
            <Nav.Link className="text-white" href="/instructor">Instructor</Nav.Link>
            <Nav.Link className="text-white" href="/batch">Batch</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
