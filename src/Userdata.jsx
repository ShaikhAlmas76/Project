import React, { useState } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Userdata() {

    const [userdata, setUserdata] = useState(null)

    const navigate = useNavigate()


    const Detail = (id) => {
        navigate("/userdetail/" + id)
    }

    const Edit = (id) => {
        navigate("/Useredit/" + id)
    }

    useEffect(() => {
        fetch("http://localhost:5000/user").then((result) => {
            return result.json().then((resp) => {
                console.log(resp);
                setUserdata(resp)
            }).catch((error) => {
                console.log(error.message);
            })
        })
    }, [])

    const Delete = (id) => {
        if (window.confirm('Do you want to remove ?')) {
            fetch("http://localhost:5000/user/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Remove Successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message);
            })
        }
    }



    return (
        <>
            <MDBTable align='middle'>
                <MDBTableHead>
                    <tr>
                        <th scope='col'>Id</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Password</th>
                        <th scope='col' className='btn-api'>Actions</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    <tr>
                        <td>
                            <Link to="/Useradd"> <button>Add User</button></Link>
                        </td>
                    </tr>
                    {
                        userdata &&
                        userdata.map((item) =>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                                <td>
                                    <div className='btn-api'>
                                        <button onClick={() => { Edit(item.id) }} >Edit</button>
                                        <button onClick={() => { Delete(item.id) }}>Delete</button>
                                        <button onClick={() => { Detail(item.id) }}>Detail</button>
                                    </div>
                                </td>
                            </tr>

                        )
                    }
                </MDBTableBody>
            </MDBTable>
        </>
    );
}