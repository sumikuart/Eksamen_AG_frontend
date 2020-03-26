// Main:
import React, { useEffect, useState } from 'react';
import axios from 'axios'



import './deleteAnimal.style.scss'



const DeleteAnimalComponent = (props) => {


    const [selectefdAnimalForDelete, setSelectefdAnimalForDelete] = useState('')
    const [deleteAnimalLoader,setDeleteAnimalLoader] =useState('Loading')

    useEffect(() => {
        fetch('http://localhost:6464/get/animal/' + props.selectedAnimalData)
        .then(response => response.json())
        .then((data) => {setSelectefdAnimalForDelete(data)})
        .then(()=>{setDeleteAnimalLoader('Done')})
    }, [props.selectedAnimalData])


    const deleteAnimalFunction = (e) => {

        axios.delete('http://localhost:6464/delete/animal/'+props.selectedAnimalData)
        .then( res => console.log(res.data))

        setSelectefdAnimalForDelete('')
        props.setAnmalEditIdSelectet('')
        setDeleteAnimalLoader('Loading')

        props.setUpdateChecker('UpdateListPlease')


    }


    if(deleteAnimalLoader == 'Loading')  {
        return(
            <div className='deleteAnimalComponentNonSelected'>
                <p>Vælg Dyr</p>
            </div>
        )
    } else {
            return (
        <div className='deleteAnimalComponent'>

            <p className="deleteHeadline">Ønsker du at <span>Slette</span> dette dyr fra databasen?</p>
            <p className="selectedAnimalToDelete">{selectefdAnimalForDelete[0].title}</p>

            <div className='deleteAnimalButton' onClick={deleteAnimalFunction}>
                <p>Fjern</p>
            </div>
        </div>
    )

    }

}

export default DeleteAnimalComponent