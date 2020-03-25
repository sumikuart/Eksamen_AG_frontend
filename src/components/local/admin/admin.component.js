// Main:
import React, { useState, useEffect } from 'react';



import './admin.style.scss'
import AdminLoginComponent from './adminComponents/adminLogin/adminlogin.component';
import AdmiLogoutComponent from './adminComponents/adminlogout/adminlogout.component';
import AdminEditMasterComponent from './adminComponents/adminEditMaster/adminEditMaster.component';


const AdminComponent = () => {

const [userLevel, setUserLevel] = useState('')


useEffect(() => {

    if( localStorage.getItem('login_Level') != null) {
        setUserLevel(localStorage.getItem('login_Level'))
    }

},[userLevel])


if( userLevel == ''){
    return (
        
        <div className='adminStyle'>


        <p className="adminHeadline">Animalcare Group Administration</p>

        <AdminLoginComponent  userLevel={userLevel} setUserLevel={setUserLevel}/>


        </div>
    ) } else {
        const adminLogout = (e) => {
            localStorage.setItem('login_Level', '');
        }

        return (
        
            <div className='adminStyle'>
    
    
            <p className="adminHeadline">Animalcare Group Administration</p>

            <AdmiLogoutComponent  userLevel={userLevel} setUserLevel={setUserLevel}/>    

            <AdminEditMasterComponent />
            </div>
        )

    }


}

export default AdminComponent