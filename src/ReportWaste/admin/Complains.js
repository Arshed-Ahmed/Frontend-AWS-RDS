import React , { useState , useEffect } from "react";
import './admincss.css';
import Sidebar from "./Sidebar";
import axios from "axios";
import { DataGrid } from '@mui/x-data-grid';
import { Card, OverlayTrigger, Tooltip, Button, Modal, Alert } from "react-bootstrap";
import swal from "sweetalert";

function Complains() {
    const [show, setShow] = useState(false);
    const [remarks, setremarks] = useState("");
    const [status, setstatus] = useState("");
    const [updateStatus, setupdateStatus] = useState("");
    const [variant, setvariant] = useState("");
    const [para, setpara] = useState();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    
    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 91,
            sortable: true,
        },
        {
            field: 'tracking_id',
            headerName: 'Tracking ID',
            width: 150,
            sortable: true,
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 130,
          sortable: false,
        },
        {
          field: 'phone',
          headerName: 'Phone',
          width: 120,
          sortable: false,
        },
        {
          field: 'remarks',
          headerName: 'Remarks',
          width: 130,
          sortable: true,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
          sortable: true,
        },
        {
          field: 'created_at',
          headerName: 'Created At',
          width: 180,
          sortable: true,
        },
        {
          field: 'updated_at',
          headerName: 'Updated At',
          width: 180,
          sortable: true,
        },
        {
          field: 'id',
          headerName: ' ',
          width: 90,
          sortable: false,
          renderCell: (params) => {
              return (
                <OverlayTrigger
                    key='bottom-1'
                    placement='bottom'
                    overlay={
                    <Tooltip id='tooltip-connected'>
                        <strong>Edit</strong>.
                    </Tooltip>
                    }
                >
                    <Button variant="primary" onClick={() => {edit(params.value)}}>
                        <i className="fas fa-edit"></i>
                    </Button>
                </OverlayTrigger>
              )
          },
        },
    ];

    const edit = (para) => {
        console.log(para);
        handleShow();
        setpara(para);
        // eslint-disable-next-line array-callback-return
        complains.map((complain) => { 
            if(complain.id === para){
                setstatus(complain.status);
                if (complain.remarks === null){
                    setremarks("");
                }else{
                    setremarks(complain.remarks);
                }
            }
        });
    }
    
    const update = e => {
        e.preventDefault();
        console.log("updated")
        const data ={
            id : para,
            status : status,
            remarks : remarks
        }; 
        axios.post('http://localhost:3001/updatecom', data).then(
            (response) => {
                console.log(response);
                if(!response.err){
                    if(response.data.err){
                        setupdateStatus(response.data.err.sqlMessage);
                        setvariant("danger");
                    } else {
                        setupdateStatus(response.data.message);
                        setvariant("success");
                        swal("Success", "Status Updated", "success").then(() => {
                            window.location.reload();
                        });
                    }
                } else {
                    setupdateStatus(response.data.err);
                    setvariant("danger");
                }
            }
        ).catch(
            (err) => {
            console.log(err);
            }
        )
    }

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
            <Sidebar activepath='/complain' />

            <div className="col p-3 bg-light">
                <div className="row p-4">
                    <h6>Admin/Complaints</h6>    
                </div>
                <div className="row p-4">
                    <Card className="w-100 py-3">
                        <DataGrid autoHeight 
                            rows={complains}
                            columns={columns}
                            pageSize={8}
                            rowsPerPageOptions={[10, 20, 30]}
                        />
                    </Card> 
                </div>
                
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Complaint No {para}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form id="complain-form" method="POST" onSubmit={update}>
                        <Alert variant={variant}>
                            {updateStatus}
                        </Alert>
                        <div className="form-group row">
                        <label htmlFor="recipient-name" className="
                                    col-sm-3 col-form-label
                                    form-heading
                                    text-md-right
                                ">Status</label>
                            <div className="col-sm-7">
                                <select type="text" name="status" list='listid' className="form-control" required
                                    onChange={e => {setstatus(e.target.value)}} value={status} >
                                    {/* <datalist id='listid'> */}
                                        <option label='pending' value='pending' />
                                        <option label='completed' value='completed' />
                                    {/* </datalist> */}
                                </select>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="message-text" className="
                                        col-sm-3 col-form-label
                                        form-heading
                                        text-md-right
                                    ">Remarks</label>
                            <div className="col-sm-7">
                                <textarea className="form-control" name="remarks" id="message-text"
                                    onChange={e => {setremarks(e.target.value)}} value={remarks} >
                                </textarea>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label"></label>
                            <div className="col-sm-7 mb-5">
                                <button type="submit" className="btn btn-custom-green" id="complain-submit-btn">
                                    SUBMIT
                                </button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={}>Update</Button> */}
                </Modal.Footer>
            </Modal> 
        </main>
    );
}

export default Complains;
