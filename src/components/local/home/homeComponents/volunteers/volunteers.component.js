// Main:
import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";


import './volunteers.style.scss'

import imgThing from "./../../../../../assets/volunteer/volunteer.jpg"

const FrivilligPoster = (props) => {


    return(
<div className="topFrivilligMapper">


       <div className="frivilligCard">

           <div className="titleholder">
            <p>{props.currentFrivillig.title}</p>
           </div>

           <div className="contentHolder">

             <img src={require('./../../../../../assets/volunteer/' + props.currentFrivillig.image)} />

                <div className="contentHolderText">
                    <p>{props.currentFrivillig.content}</p>
                </div>

           </div>

       </div>

             <div className="ekstarHolder">
                <p>{props.currentFrivillig.extra}</p>
           </div>
           </div>

)
}

const VolunteersComponent = () => {

    const [frivilligContent, setFrivilligContent] = useState('');
    const [frivilligLoader, setFrivilligLoader] = useState('Loading');

    useEffect(() => {
        
        fetch('http://localhost:6464/get/volunteers')
        .then(response => response.json())
        .then((data) => {setFrivilligContent(data)})
        .then(()=>{setFrivilligLoader('Done')})

    
    }, [])


    const  frivilligMapper = (e) => {
        return frivilligContent.reverse().map(function (currentFrivillig,  i) {

            return <FrivilligPoster currentFrivillig={currentFrivillig} Key={i} />
        
    })
    }

    if(frivilligLoader == "Loading") {
    return (
        <div className='friviligStyle'>
            <div className="friviligContent">
                <p className="friviligHeadline">Loading</p>
            </div>     
        </div>
    
    ) } else {

        console.log(frivilligContent)
        return (
            <div className='friviligStyle'>
    
                <div className="friviligContent">
                    <p className="friviligHeadline">Bliv Frivillig</p>

                    <div className="flexer frivilligHolder">
                        {frivilligMapper()}
                    </div>
                </div>
                    
            </div>
        )
    
    }

}

export default VolunteersComponent