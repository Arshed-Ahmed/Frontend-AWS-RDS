import React, { useState } from "react";
import './admincss.css';
import { Nav } from 'react-bootstrap';
import { Redirect } from "react-router-dom";
import swal from "sweetalert";

function Sidebar(activepath) {
    const [islogout, setislogout] = useState(false);

    const logout = () =>{
        swal({
            title: "Are you sure?",
            text: "Make sure you have finished your work!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                localStorage.clear();
                sessionStorage.clear();
                document.cookie.split(";").forEach((c) => {
                    document.cookie = c
                    .replace(/^ +/, "")
                    .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
                });
                setislogout(true);
            }
        });
    }

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{width: '240px'}}>
            <a href="/hh" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"> 
                <span className="fs-4">Admin Panel</span>
            </a>
            <hr />
            
            <Nav activeKey={activepath} className="nav-pills flex-column mb-auto"> 
                {/* <Nav.Item>
                    <Nav.Link href="/ReportWaste"  className="link-dark">
                        <i className="fas fa-home me-2"></i> Home
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/dashb" className="link-dark">
                        <i className="fas fa-tachometer-alt me-2"></i> Dashboard
                    </Nav.Link>
                </Nav.Item> */}
                <Nav.Item>
                    <Nav.Link href="/complains" className="link-dark">
                        <i className="fas fa-table me-2"></i> Complaints
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/redeemed" className="link-dark">
                        <i className="fas fa-box me-2"></i> Token Redeemed Records
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/customers" className="link-dark">
                        <i className="fas fa-user-circle me-2"></i> Customers
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <hr />
            <div className="dropdown">
                <a href=" " className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                    <strong>Profile</strong>
                </a>
                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                    <li><a className="dropdown-item" href="/new">New complain</a></li>
                    <li><a className="dropdown-item" href="/setting">Settings</a></li>
                    <li><a className="dropdown-item" href="/profile">Profile</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <li><a className="dropdown-item" role="button" onClick={logout}>Sign out</a></li>
                </ul>
            </div>
            {islogout && <Redirect to="/reportwaste" />}
        </div>
    );
}

export default Sidebar; 