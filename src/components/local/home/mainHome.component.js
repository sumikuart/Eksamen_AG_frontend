
// Main:
import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";

//Styles
import './mainHome.style.scss'
import HomeHeader from './homeComponents/header/homeHeader.component';
import HomeAbout from './homeComponents/about/homeAbout.component';
import VolunteersComponent from './homeComponents/volunteers/volunteers.component';
import HelpComponentent from './homeComponents/help/help.component';
import NewsLetterComponentent from './homeComponents/newsLetter/newsLetter.component';
import AdoptComponent from './homeComponents/adopt/adopt.component';
import AnimalsComponent from './homeComponents/animals/animals.component';

//Components


const MainHome = () => {

    return (
        <div className='mainHomeStyle'>
            
     
            <div  id="home"></div>
            <HomeHeader />
            <div  id="about"></div>
            <HomeAbout />
            <div  id="volunteers"></div>
            <VolunteersComponent />
            <div  id="help"></div>
            <HelpComponentent />
            <div  id="newsletter"></div>
            <NewsLetterComponentent />
            <div  id="adopt"></div>
            <AdoptComponent/>
            <div  id="animals"></div>
            <AnimalsComponent />

        </div>
    )

}

export default MainHome