import React , { useState , useEffect } from "react";
import './admincss.css';
import Sidebar from "./Sidebar";
import axios from "axios";
import { OverlayTrigger, Tooltip, Button } from "react-bootstrap";

function Admin() {

    const [complains, setcomplains] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/displaycomplain').then(
            (response) => {
                console.log(response);
                setcomplains( response.data);
            }
        ).catch(
            (err) => {
                console.log(err);
                // setshow(true);
                // setreviewStatus(err.message);
            }
        )
    },[])

    return (
        <main>
            <Sidebar activepath='/admin' />

            <div className="col p-3 bg-light">
                <div className="row p-4">
                    <h6>Admin/Complaints</h6>    
                </div>
                <div className="row p-4">
                    <table className="table table-hover table-responsive">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Tracking ID</th>
                                <th scope="col">Postal Code</th>
                                <th scope="col">Address</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Remarks</th>
                                <th scope="col">Created At</th>
                                <th scope="col">Updated At</th>
                                <th scope="col">Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            { complains.length > 0 ? (
                                complains.map( complain => {
                                    return (
                                        <tr key={complain.id}>
                                            <th scope="row">{complain.id}</th>
                                            <td>{complain.tracking_id}</td>
                                            <td>{complain.postal_code}</td>
                                            <td>{complain.address}</td>
                                            <td>{complain.email}</td>
                                            <td>{complain.phone}</td>
                                            <td>{complain.remarks}</td>
                                            <td>{complain.created_at}</td>
                                            <td>{complain.updated_at}</td>
                                            <td>
                                                <OverlayTrigger
                                                    key='bottom-1'
                                                    placement='bottom'
                                                    overlay={
                                                    <Tooltip id='tooltip-connected'>
                                                        <strong>Edit</strong>.
                                                    </Tooltip>
                                                    }
                                                >
                                                    <Button variant="primary">
                                                        <i className="fas fa-edit"></i>
                                                    </Button>
                                                </OverlayTrigger>
                                            </td>
                                        </tr>
                                    )
                                })
                            ):(
                                <tr>
                                    <th scope="row">There are no complaints to show</th>
                                </tr>
                            )}
                        </tbody>
                    </table>  
                </div>
                
            </div>
        </main>
    );
}

export default Admin;
