// Main:
import React, { useEffect,  useState } from 'react';
import { NavLink } from "react-router-dom";


import './adopt.style.scss'



const AdoptComponent = () => {

    const [adoptData, setAdoptData] = useState('')
    const [adoptLoader, setAdoptLoader] = useState('Loading')

useEffect(() => {

    fetch('http://localhost:6464/get/adopt')
    .then(response => response.json())
    .then((data) => {setAdoptData(data)})
    .then(()=>{setAdoptLoader('Done')})


}, [])


if (adoptLoader == 'Loading') {

    return(
        <div className='adoptStyle'>

            <div className='adoptContent'>
                <p>Loading</p>
            </div>

        </div>
    )
} else {

    console.log(adoptData)
    return (
        <div className='adoptStyle'>

            <div className='adoptContent'>

                <p className="adoptDataTitle">{adoptData[0].title}</p>
                <div  className="adoptDataContent" dangerouslySetInnerHTML={{ __html: adoptData[0].content}} />

            </div>

        </div>
    )
}


}

export default AdoptComponent