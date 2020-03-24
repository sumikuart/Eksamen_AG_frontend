// Main:
import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";


import './help.style.scss'



const HelpComponentent = () => {

    return (
        <div className='helpStyle'>

            <div className="helpContentDiv">
                <p className="helpHeadline">STÅR DU MED ET DYR I NØD?</p>
                <p className="helpSmalltekst">Ring til Dyrenes Vagtcentral på 1812 og få råd til hjælp og håndtering af dyr</p>
            </div>

        </div>
    )

}

export default HelpComponentent