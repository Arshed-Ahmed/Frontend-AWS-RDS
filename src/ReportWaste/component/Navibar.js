import React from "react";
import '../App.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function Navibar(activepath) {
  return (
        <Navbar collapseOnSelect expand="lg" id="top-nav" >
            <Container>
                <button type="button" id="sidebarCollapse" className="btn">
                    <i className="fas fa-align-left"></i>
                </button>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav activeKey={activepath} className="me-auto" >
                        <Nav.Link className="mt-2 me-4 ms-4">
                            <form className="form-inline" id="search-form">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text border-0" id="basic-addon1">
                                        <i className="fas fa-search"></i>
                                        </span>
                                    </div>
                                    <input type="text" className="form-control border-0" id="search-input" placeholder="Type in to search.." aria-label="search" aria-describedby="basic-addon1" />
                                </div>
                            </form>
                        </Nav.Link>
                        <Nav.Link href="/makec" className="mt-2 me-4">Make a Complaint</Nav.Link>
                        <Nav.Link href="/trackc" className="mt-2 me-4">Track Complaint</Nav.Link>
                        <Nav.Link href="#" className="">
                            <button className="btn btn-sm btn-custom-green p-2 " href="#">
                                        Donate Now
                            </button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  );
}

export default Navibar;
