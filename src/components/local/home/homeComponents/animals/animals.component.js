// Main:
import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";


import './animals.style.scss'


const AnimalPoster = (props) =>{
    return (
  
        <NavLink to={'/animal/' + props.currentAnimal._id} className='animalCard flexer'>
            <div className='animalImgHolder'>
                <img src={require("../../../../../../../backend/assets/animals/" + props.currentAnimal.image)} alt=""/>
            </div>
            <div className='animalTekstHolder'>
                <p className="animalNameHolder">{props.currentAnimal.title}</p>
                    <div className="animalContentLimiter">
                        <p className="animalInfoHolder">{props.currentAnimal.content}</p>
                    </div>

                    <p className="animaltimeHolder">{"været på internatet i " + props.currentAnimal.daysInCare}</p>
            </div>
        </NavLink>

    )
}

const AnimalsComponent = () => {

const [animalsList, setAnimalsList] = useState('')
const [animalLoader, setAnimalLoader] = useState('Loading')

useEffect(() => {

    fetch('http://localhost:6464/get/animals')
    .then(response => response.json())
    .then((data) => {setAnimalsList(data)})
    .then(()=>{setAnimalLoader('Done')})

}, [])

const animalsMapper = (e)  =>{

    return animalsList.map(function (currentAnimal,  i) {
        if ( i < 8) {
            return <AnimalPoster currentAnimal={currentAnimal} Key={i} />
        }
    })


}


if( animalLoader == 'Loading'){
    
    return (
        <div className='animalsStyle'>

            <div className="animalsMainText">
                <p className="animalsTitle">Loading</p>
            </div>
        </div>
    )

} else {


    return (
        <div className='animalsStyle'>

            <div className="animalsMainText">
                <p className="animalsTitle">Dyr hos os</p>
                <div className="flexer">
                <p className="animalCounter">{animalsList.length +" dyr"}</p>
                <NavLink to="/animalList" className="animalLink">Vis alle dyr</NavLink>
                </div>
            </div>

            <div className="animalMapperContainer flexer">
                {animalsMapper()}
            </div>
            
            
        </div>
    )
}

}

export default AnimalsComponent