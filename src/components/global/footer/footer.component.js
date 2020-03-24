
// Main:
import React, { useContext } from 'react';
import { NavLink, Link } from "react-router-dom";


import './footer.style.scss'



const FooterComponent = () => {

    return (
        <div className='footerStyle'>

            <div className="flexer footerCenterContent">
                <div className="footerKontaktInfo">

                    <p>KONTAKT</p>

                    <p>Tornebuskvej 22, 1</p>
                    <p>1131 København K</p>
                    <p>CVR: 22446187</p>
                    <p>Husk at du kan få fradrag for donationer på op til 16.600kr</p>

                </div>

                <div className="footerPartnerInfo">

                    <p>PARTNER</p>

                    <ul>
                        <li><a href="https://anima.dk/">Anima</a></li>
                        <li><a href="https://www.worldanimalprotection.dk/">World Animal Protection</a></li>
                        <li><a href="https://www.foedevarestyrelsen.dk/Sider/forside.aspx">Fødevarestyrelsen</a></li>
                        <li><a href="https://faktalink.dk/">Faktalink</a></li>
                    </ul>

                </div>

            </div>

            <p className="copyrightText">&#169; - Animalcare Group</p>
        </div>
    )

}

export default FooterComponent