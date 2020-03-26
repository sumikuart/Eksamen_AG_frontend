// Main:
import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";


import './editAnimals.style.scss'
import EditAnimalsListComponent from './editAnimalComponents/editAnimalComponent/editAnimalList/editAnimalList.component';
import EditAnimalMainComponent from './editAnimalComponents/editAnimalComponent/editAnimalMain/editAnimalMain.component';
import AddAnimalComponent from './editAnimalComponents/addAnimalComponent/addAnimal.component';
import DeleteAnimalComponent from './editAnimalComponents/deleteAnimalComponent/deleteAnimal.component';


const EditAnimalsComponent = () => {

    const [completeAnmalEditList, setCompleteAnmalEditList] = useState('')
    const [editAnimalLoader, setEditAnimalLoader] = useState('Loading')
    const [animalEditMode,setAnimalEditMode] =useState('')

    const [anmalEditIdSelectet, setAnmalEditIdSelectet] = useState('')

    const [updateChecker, setUpdateChecker] = useState('')


    useEffect(() => {

        fetch('http://localhost:6464/get/animals')
        .then(response => response.json())
        .then((data) => {setCompleteAnmalEditList(data)})
        .then(()=>{setEditAnimalLoader('Done')})
    
        setUpdateChecker('')
    }, [updateChecker])


    const startEditModeAnimals = (e) => {
        setAnimalEditMode('edit')
    }
    
    const startCreateModeAnimals = (e) =>{
        setAnimalEditMode('new')
    }
    const startDeleteModeAnimals = (e) =>{ 
        setAnimalEditMode('delete')
    }

    const editAnimalMode = (e) => {

        if(animalEditMode== 'edit') {
            return(
                <div className="flexer">
                <EditAnimalsListComponent animalData={completeAnmalEditList}  setAnmalEditIdSelectet={setAnmalEditIdSelectet}/> 
                <EditAnimalMainComponent selectedAnimalData={anmalEditIdSelectet}/>
                </div>
                   
            )
        }

        if(animalEditMode== 'new')  {
            return(
                <div>
                    <AddAnimalComponent completeAnmalEditList={completeAnmalEditList} setUpdateChecker={setUpdateChecker} />
                </div>
            )
        }

        if(animalEditMode== 'delete')  {
            return(
                <div className='flexer'>
                    <EditAnimalsListComponent animalData={completeAnmalEditList}  setAnmalEditIdSelectet={setAnmalEditIdSelectet} /> 
                    <DeleteAnimalComponent selectedAnimalData={anmalEditIdSelectet} setAnmalEditIdSelectet={setAnmalEditIdSelectet} completeAnmalEditList={completeAnmalEditList} setUpdateChecker={setUpdateChecker} />
                </div>
            )
        }
    }


    if(editAnimalLoader == 'Loading') {
        return(
                <div className='editAnimalsStyle'>
                    <p>Loading</p>
                </div>
            )
        
    } else {
        return (
            <div className='editAnimalsStyle'>

                <div className="editAnimalModeSelector flexer">
                    <div onClick={startEditModeAnimals}>
                        <p>Redigere et eksisterende Dyr</p>
                    </div>

                    <div onClick={startCreateModeAnimals}>
                        <p>Opret Nyt dyr</p>
                    </div>

                    <div onClick={startDeleteModeAnimals}>
                        <p>Slet dyr</p>
                    </div>
                </div>

                {editAnimalMode()}
            
          
    
            </div>
        )

    }


}

export default EditAnimalsComponent