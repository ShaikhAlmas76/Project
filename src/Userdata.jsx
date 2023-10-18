import React from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const Userdata = () => {
    return (
        <>
            <h1>user data </h1>

            <table>
                <tr>
                    <td>id</td>
                    <td> name </td>
                    <td> email </td>
                    <td> password </td>
                </tr>
            </table>

        </>
    );
}

export default Userdata;