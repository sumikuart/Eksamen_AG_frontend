// Main:
import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";


import './editAnimalList.style.scss'


const AnimalEditCompletePoster =(props)=>{
    return(
        <div className="animeEditListCard" onClick={()=>props.setAnmalEditIdSelectet(props.currentAnimal._id)}>
            <p>{props.currentAnimal.title}</p>
        </div>
    )
}
const EditAnimalsListComponent = (props) => {

    const  animalEditListMapper= (e) => {
        return props.animalData.map(function (currentAnimal, i) {

            return <AnimalEditCompletePoster currentAnimal={currentAnimal} Key={i} setAnmalEditIdSelectet={props.setAnmalEditIdSelectet} />

        })
    }

    return (
        <div className='editAnimalListStyle'>

            <div className="editAnimallistHolder">
                {animalEditListMapper()}
            </div>

        </div>
    )

}

export default EditAnimalsListComponent