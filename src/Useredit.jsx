import React, { useState, useEffect, } from 'react';
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Useredit = () => {
    const { userid } = useParams()
    // const [userdata, setUserdata] = useState({})
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate(false)

    useEffect(() => {
        fetch("http://localhost:5000/user/" + userid).then((result) => {
            return result.json().then((resp) => {
                console.log(resp);
                setId(resp.id)
                setName(resp.name)
                setEmail(resp.email)
                setPassword(resp.password)
                // setUserdata(resp)
            }).catch((error) => {
                console.log(error.message);
            })
        })
    }, [])

    function savedata() {

        let data = { id, name, email, password }
        console.log(savedata);

        fetch("http://localhost:5000/user/" + id, {
            method: "PUT",
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
            <h1>edit</h1>
            <MDBContainer className="p-3 my-5 d-flex flex-column w-50 square border border-primary border-5 bg-success">
                {/* <form onSubmit={savedata}> */}

                <MDBInput value={id} onChange={(e) => setId(e.target.value)} wrapperClass='mb-4' disabled label='Id' id='form1' type='text' />
                <MDBInput value={name} onChange={(e) => setName(e.target.value)} wrapperClass='mb-4' label='Name' id='form2' type='text' />
                <MDBInput value={email} onChange={(e) => setEmail(e.target.value)} wrapperClass='mb-4' label='Email' id='form3' type='email' />
                <MDBInput value={password} onChange={(e) => setPassword(e.target.value)} wrapperClass='mb-4' label='Password' id='form4' type='password' />
                <input type="submit" value="Useredit" onClick={savedata} />
                {/* </form> */}
            </MDBContainer >
        </>
    );
}

export default Useredit;