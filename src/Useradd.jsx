import React, { useState } from 'react';
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
function Useradd() {

    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()


    function savedata() {

        let data = { name, email, password }
        console.log(savedata);

        fetch("http://localhost:5000/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }).then((result) => {
            console.log(result);
            result.json().then((resp) => {
                console.log(resp);
                navigate("/userdata")
            })
        })
    }
    return (
        <>
            <h1> Add User </h1>
            <MDBContainer className="p-3 my-5 d-flex flex-column w-50 square border border-primary border-5 bg-success">
                {/* <form onSubmit={savedata}> */}

                <MDBInput value={id} onChange={(e) => setId(e.target.value)} wrapperClass='mb-4' disabled label='Id' id='form1' type='text' />
                <MDBInput value={name} onChange={(e) => setName(e.target.value)} wrapperClass='mb-4' label='Name' id='form2' type='text' />
                <MDBInput value={email} onChange={(e) => setEmail(e.target.value)} wrapperClass='mb-4' label='Email' id='form3' type='email' />
                <MDBInput value={password} onChange={(e) => setPassword(e.target.value)} wrapperClass='mb-4' label='Password' id='form4' type='password' />
                <input type="submit" value="Useradd" onClick={savedata} />
                {/* </form> */}
            </MDBContainer >
        </>
    );
}

export default Useradd;