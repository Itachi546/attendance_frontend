import React, { Component } from 'react'
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse
} from "mdbreact";


export default class Navigation extends Component {

  render() {
    return (
      <div className="mt-5" style={{ backgroundColor: '#EC3545' }}>
        <MDBNavbar dark expand="md">
          <MDBNavbarToggler />
          <MDBCollapse id="navbarCollapse3" navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavLink to="/">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/classes">Class</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/instructor">Instructor</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/batch">Batch</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </div>
    );
  }
}
