// Main:
import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import FilterResults from "react-filter-search";

import './visAlle.style.scss'

const AnimalCompletePoster = (props) => {
    return (

        <NavLink to={'/animal/' + props.currentAnimal._id} className='animalCard flexer'>
            <div className='animalImgHolder'>
                <img src={require("../../../../../backend/assets/animals/" + props.currentAnimal.image)} alt="" />
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

const VisAlleComponent = () => {

    const [animalCompleteList, setAnimalCompleteList] = useState('')
    const [animalCompleteLoader, setAnimalCompleteLoader] = useState('Loading')
    const [searchWord, setSearchWord] = useState('')

    useEffect(() => {
        window.scrollTo(0, 0)

        fetch('http://localhost:6464/get/animals')
            .then(response => response.json())
            .then((data) => { setAnimalCompleteList(data) })
            .then(() => { setAnimalCompleteLoader('Done') })

    }, [])

    const completeListMapper = (e) => {
        return animalCompleteList.map(function (currentAnimal, i) {

            return <AnimalCompletePoster currentAnimal={currentAnimal} Key={i} />

        })
    }

    const searchState = (e) => {
        if (searchWord == '') {
            return (
                <div className="completeListHolder">
                    {completeListMapper()}
                </div>
            )
        } else {
            return (
                <div>
                    <p>{"Du søger på: " + searchWord}</p>

                    <FilterResults
                        value={searchWord}
                        data={animalCompleteList}

                        renderResults={results => (
                            <div className='searchFilterFlex'>
                                {results.map(produkter => (


                                    <div className='completeListHolder'>

                                        <NavLink to={'/animal/' + produkter._id} className='animalCard flexer'>
                                            <div className='animalImgHolder'>
                                                <img src={require("../../../../../backend/assets/animals/" + produkter.image)} alt="" />
                                            </div>
                                            <div className='animalTekstHolder'>
                                                <p className="animalNameHolder">{produkter.title}</p>
                                                <div className="animalContentLimiter">
                                                    <p className="animalInfoHolder">{produkter.content}</p>
                                                </div>

                                                <p className="animaltimeHolder">{"været på internatet i " + produkter.daysInCare}</p>
                                            </div>
                                        </NavLink>

                                    </div>

                                ))}
                            </div>
                        )}
                    />
                </div>
            )
        }

    }

    const searchWordChangeHandler = (e) => {
        setSearchWord(e.target.value)
    }

    if (animalCompleteLoader == 'Loading') {
        return (
            <div className='visAlleStyle'>
                <p>Loading</p>
            </div>
        )
    } else {
        return (
            <div className='visAlleStyle'>

                <div className="visAlleContent">
                    <p className="alleDyrHeadline">Vores Dyr</p>

                    <p className="searchCompleteHeadline">{"Søg blandt vores ( " + animalCompleteList.length + " )  dyr:"}</p>
                    <div className="searchDiv flexer">
                        <form>
                            <input type="text" placeholder="søg..." value={searchWord} onChange={searchWordChangeHandler} />
                        </form>
                    </div>

                    {searchState()}
                </div>
            </div>
        )
    }


}

export default VisAlleComponent