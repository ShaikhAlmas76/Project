import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'


const Userdetail = () => {

    const { userid } = useParams()
    const [userdata, setUserdata] = useState({})

    useEffect(() => {
        fetch("http://localhost:5000/user/" + userid).then((result) => {
            return result.json().then((resp) => {
                console.log(resp);
                setUserdata(resp)
            }).catch((error) => {
                console.log(error.message);
            })
        })
    }, [])


    return (
        <>
            <h1>user detail</h1>
            <div>
                {
                    userdata &&
                    <>
                        <h1>user name = {userdata.name}</h1>
                        <h1>user email = {userdata.email}</h1>
                        <h1>user password = {userdata.password}</h1>
                    </>
                }
            </div>
        </>
    );
}

export default Userdetail;