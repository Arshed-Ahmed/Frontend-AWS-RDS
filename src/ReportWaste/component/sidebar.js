import React from "react";
import logo from '../logo.png';
import '../App.css';
import { Col } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';

function Sidebar({activepath}) {
  return (
        <Col className="sidebar" >
            <div className="sidebar-logo">
                <img src={logo} alt="logo" id="logo" />
            </div>
            <Nav defaultActiveKey={activepath} className="flex-column justify-content-end pe-3">
                <Nav.Link href="/ReportWaste"> <i className="fas fa-home"></i> Home</Nav.Link>
                <Nav.Link href="/statistic"> <i className="fas fa-chart-bar"></i> Statistic</Nav.Link>
                <Nav.Link href="/about"> <i className="fas fa-eject"></i> About Us</Nav.Link>
                <Nav.Link href="/foucet"> <i className="fab fa-bitcoin"></i> Foucet</Nav.Link>
                <Nav.Link href="/whatwedo"> <i className="fas fa-dove"></i> What We Do</Nav.Link>
                <Nav.Link href="/privacyp"> <i className="fas fa-user-secret"></i> Privacy Policy</Nav.Link>
                <Nav.Link href="/blog"> <i className="fa fa-rss-square" aria-hidden="true"></i> Blog</Nav.Link>
            </Nav>
        </Col>
  );
}

export default Sidebar;