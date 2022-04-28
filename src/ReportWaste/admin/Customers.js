import React , { useState , useEffect } from "react";
import './admincss.css';
import Sidebar from "./Sidebar";
import axios from "axios";
import { DataGrid } from '@mui/x-data-grid';
import { Card } from "react-bootstrap";

function Customers() {
    
    
    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 120,
            sortable: true,
        }, 
        {
            field: 'postal_code',
            headerName: 'Postal Code',
            width: 150,
            sortable: true,
        },
        {
          field: 'address',
          headerName: 'Address',
          width: 230,
          sortable: true,
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 200,
          sortable: false,
        },
        {
          field: 'phone',
          headerName: 'Phone',
          width: 160,
          sortable: false,
        },
        {
          field: 'created_at',
          headerName: 'Joined On',
          width: 200,
          sortable: true,
        }
    ];

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
                    <h6>Admin/Customers</h6>    
                </div>
                <div className="row p-4">
                    <Card className="w-100 py-3">
                        <DataGrid autoHeight 
                            rows={complains}
                            columns={columns}
                            pageSize={10}
                            rowsPerPageOptions={[10, 20, 30]}
                        />
                    </Card> 
                </div>
                
            </div>
        </main>
    );
}

export default Customers;
