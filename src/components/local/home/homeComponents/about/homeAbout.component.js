// Main:
import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";

import './homeAbout.style.scss'



const HomeAbout = () => {

    const[aboutContent, setAboutContent]= useState('');
    const[aboutLoader, setAboutLoader]= useState('Loading');


    useEffect(() => {
        
        fetch('http://localhost:6464/get/about')
        .then(response => response.json())
        .then((data) => {setAboutContent(data)})
        .then(()=>{setAboutLoader('Done')})

    
    }, [])

    if(aboutLoader == "Loading") {
        return(
            <div>
                <p>Loading</p>
            </div>
        )
    } else {
        
        console.log(aboutContent)

        return (
            <div className='homeAboutStyle'>
    
                <p className="aboutHeadline">{aboutContent[0].title_1}</p> 

                <div className="homeAboutContent flexer">

                    <div className="rowOne">
                        <div dangerouslySetInnerHTML={{ __html: aboutContent[0].content_1 }} />
                    </div>

                    <div className="rowTwo">
                        <p className="aboutHeadline">{aboutContent[0].title_2}</p>
                        <div dangerouslySetInnerHTML={{ __html: aboutContent[0].content_2 }} />
                    </div>

                    <div className="rowThree">
                        <p className="aboutHeadline">{aboutContent[0].title_3}</p>
                        <div dangerouslySetInnerHTML={{ __html: aboutContent[0].content_3 }} />
                    </div>
                    
                </div>
    
            </div>
        )

    }


}

export default HomeAbout