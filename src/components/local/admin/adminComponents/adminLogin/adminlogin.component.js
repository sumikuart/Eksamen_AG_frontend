// Main:
import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from "react-router-dom";


import './adminlogin.style.scss'



const AdminLoginComponent = (props) => {

    
    let history = useHistory()

    const [adminLoginMail, setAdminLoginMail] = useState('')
    const [adminLoginPassword, setAdminLoginPassword] = useState('')

    const [adminLoginMailError, setAdminLoginMailError] = useState('')
    const [adminLoginPasswordError, setAdminLoginPasswordError] = useState('')

    const [adminList, setAdminList] = useState('')
    const [adminLoginLoader, setAdminLoginLoader] = useState('Loading')


    useEffect(() => {
        fetch('http://localhost:6464/get/admin')
        .then(response => response.json())
        .then((data) => {setAdminList(data)})
        .then(()=>{setAdminLoginLoader('done')})
    }, [])
    
    // Validering
    const handleLoginMail = (e) => {
        setAdminLoginMail(e.target.value);
    }

    const handleLoginPassword = (e) => {
        setAdminLoginPassword(e.target.value);
    }

    const validateLoginEmail = (e) => {
        if(!adminLoginMail.includes('@')  || !adminLoginMail.includes('.')){
            setAdminLoginMailError('Email: Dette er ikke en godkendt Email')
        } else {
            setAdminLoginMailError('')
        }
        if(adminLoginMail == ""){
            setAdminLoginMailError('Email: Tast venneligst en godkendt email ind')
        }
    }

    const validateLoginPassword = (e) => {

        if(adminLoginPassword == ''){
            setAdminLoginPasswordError('Password: Kodeordet er tomt')
        } else {
            setAdminLoginPasswordError('')
        }

    }

    // Login Function

    const adminLogin = (e) => {
        {validateLoginEmail()}
        {validateLoginPassword()}

        if( adminLoginPasswordError == '' && adminLoginMailError == '') {

            for(var i  =  0; i < adminList.length; i++) {

                if(adminLoginMail == adminList[i].email) {
                    if(adminLoginPassword == adminList[i].password){
                        localStorage.setItem('login_Level', adminList[i].level);
                        props.setUserLevel(localStorage.getItem('login_Level'))
                       
                    }
                }
            }
        }
    }

    if( adminLoginLoader == "Loading") {
        return (
            <div className='adminLoginStyle'>
                <p>loading</p>
            </div>
    )    
    }else{
    return (
        <div className='adminLoginStyle'>

            <div className="loginHolder">

                <p  className="loginHeadline" >Admin login</p>

                <form>
                    <input type="text" placeholder="Email..." value={adminLoginMail} onChange={handleLoginMail} onBlur={validateLoginEmail}/>
                    <input type="password" placeholder="Kodeord..." value={adminLoginPassword} onChange={handleLoginPassword} onBlur={validateLoginPassword}/>
                </form>


                <div className="loginBottonHolder">

                    <div className="adminLoginButton" onClick={adminLogin}>
                        <p>Login</p>
                    </div>

                </div>

                
                <p className="handleErrorAdminLogin">{adminLoginMailError}</p>
                <p className="handleErrorAdminLogin">{adminLoginPasswordError}</p>
            </div>

        </div>
    )
}
}

export default AdminLoginComponent