import React , { useState , useEffect } from "react";
import './admincss.css';
import Sidebar from "./Sidebar";
import axios from "axios";
import { DataGrid } from '@mui/x-data-grid';
import { Card } from "react-bootstrap";

function Redeemed() {
    
    const columns = [
        {
            field: 'id',
            headerName: 'Id',
            width: 200,
            unique: true,
            sortable: true,
        }, {
            field: 'email',
            headerName: 'Email',
            width: 200,
            unique: true,
            sortable: true,
        },
        {
            field: 'redeemed_tokens',
            headerName: 'Redeemed Tokens',
            width: 200,
            sortable: true,
        },
        {
            field: 'last_redeemed_date',
            headerName: 'Last Redeemed Date',
            width: 200,
            sortable: true,
        }
    ];
    
    

    const [redeemed, setredeemed] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/displayredeemed').then(
            (response) => {
                console.log(response);
                setredeemed(response.data);
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
            <Sidebar activepath='/redeemed' />

            <div className="col p-3 bg-light">
                <div className="row p-4">
                    <h6>Admin/Token Redeemed</h6>    
                </div>
                <div className="row p-4">
                    <Card className="w-100  py-3">
                        <DataGrid autoHeight 
                            rows={redeemed} 
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

export default Redeemed;
