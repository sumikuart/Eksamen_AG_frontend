
// Main:
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, Link, useHistory} from "react-router-dom";

// Style
import './navigation.style.scss'

// Image Import

import logo from '../../../assets/logo.png'

const NavigationsBar = () => {

    let history = useHistory()

    const navHandler = () => {

        if(history.location.pathname === "/") {

            return(
                <nav>
                        <ul className="flexer">
                            <li><Nav.Link href="#home" >Hjem</Nav.Link></li>
                            <li><Nav.Link href="#about">Om os</Nav.Link></li>
                            <li><Nav.Link href="#volunteers">Blive Frivillig</Nav.Link></li>
                            <li><Nav.Link href="#help">Dyr i nød?</Nav.Link></li>
                            <li><Nav.Link href="#animals">Adopter et dyr</Nav.Link></li>
                        </ul>
                </nav>
        )

        } else {

            return(
                <nav>
                        <ul className="flexer">
                            <li><NavLink to="/" >Hjem</NavLink></li>
                            <li><NavLink to="/">Om os</NavLink></li>
                            <li><NavLink to="/">Blive Frivillig</NavLink></li>
                            <li><NavLink to="/">Dyr i nød?</NavLink></li>
                            <li><NavLink to="/">Adopter et dyr</NavLink></li>
                        </ul>
                </nav>
        )
        }

    }

    return (
        <div className='navigationsStyle'>

            <div className="flexer navigationAllignPosition">

                <div className='logoHolder'> 

                    <NavLink to="" className="flexer">
                        <img src={logo} alt="Animalcare Logo"/>
                        <h1>Animalcare Group</h1>
                    </NavLink>

                </div>

                <div className="navigationsHolder">
                    {navHandler()}
                </div>

            </div>

        </div>
    )

}

export default NavigationsBar