import React from "react";
import '../style.css';
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import  Nav from "react-bootstrap/Nav";
import logo from '../../asset/RW 3 - Green.png';
import { NavLink } from "react-router-dom";


function HomeNav() {

    return (
      <div>
        <Navbar className="Nav-D" expand="lg">
          <Container>
            
            <Navbar.Brand>
              <NavLink to="/">
                <img alt="ReportWaste" src={logo} width="150" className="RPlogo" /> {' '}
              </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className=" justify-content-end"  id="basic-navbar-nav">
              <Nav>

              <NavLink className="nav-link-hover nav-link-home white" to="/">
                HOME
              </NavLink>

              <NavLink className="nav-link-hover nav-link-home white" to="/analytics" >
                ANALYTICS
              </NavLink>

              <NavLink className="nav-link-hover nav-link-home white" to="/ReportWaste" >
                REPORT WASTE
              </NavLink>

              <NavLink className='nav-link-home' to="/login">
                  <button className="signup px-3">SIGN IN</button>
              </NavLink>

              </Nav>

            </Navbar.Collapse>   
            
          </Container>
        </Navbar>
      </div>
    )
}

export default HomeNav;