// Main:
import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";


import './adminlogout.style.scss'



const AdmiLogoutComponent = (props) => {

    const adminLogout = (e) => {

        props.setUserLevel('')
        localStorage.setItem('login_Level', '');
    }

    return (
        <div className='adminlogoutStyle'>

            <div className="logoutAdminButton" onClick={adminLogout}>
                <p>Logout</p>
            </div>

        </div>
    )

}

export default AdmiLogoutComponent