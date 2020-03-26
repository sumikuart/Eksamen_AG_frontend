// Main:
import React, { useState, useEffect} from 'react';
import { NavLink } from "react-router-dom";


import './detaljevisning.style.scss'



const DetaljeComponent = (props) => {

    const [chosenAnimal, setChosenAnimal] = useState('')
    const [detaljeLoader, setDetaljeLoader]  = useState('Loading')

    useEffect(() => {
        window.scrollTo(0, 0)

        fetch('http://localhost:6464/get/animal/' + props.match.params.id)
        .then(response => response.json())
        .then((data) => {setChosenAnimal(data)})
        .then(()=>{setDetaljeLoader('Done')})

    }, [])

    if( detaljeLoader == 'Loading') {
        return (
            <div className='detaljeStyle'>
                <p>Loading</p>
            </div>
        )

    } else {

        return (
            <div className='detaljeStyle'>


                <p className="detaljeHeadline">{chosenAnimal[0].title}</p>

                <div className="flexer detaljeMainContent">

                    <div className="detaljeImgHolder">
                        <img src={require("../../../../../backend/assets/animals/" + chosenAnimal[0].image)} alt=""/>
                    </div>

                    <div className="detaljeTekstHolder">
                        <div className="detaljeHardData">
                            <p>Detaljer:</p>
                            <ul>
                                <li>{"Tid hos os: Ankom for " +chosenAnimal[0].daysInCare  + " Dage siden" }</li>
                                <li>{"Alder: " + chosenAnimal[0].age}</li>
                                <li>{"Køn: " +chosenAnimal[0].sex}</li>
                                <li>{"Note: " +chosenAnimal[0].details}</li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="detaljerContentHolder">
                    <p className="detaljerSubHeadline">Detaljer:</p>
                    <p  className="detaljerSubContent" >{chosenAnimal[0].content}</p>
                </div>
            </div>
        )
    }


}

export default DetaljeComponent