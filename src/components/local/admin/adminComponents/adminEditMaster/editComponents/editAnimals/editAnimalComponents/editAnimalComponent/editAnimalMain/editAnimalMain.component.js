// Main:
import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios'

import './editAnimalMain.style.scss'


const EditAnimalMainComponent = (props) => {


  const [selectedAnimalToEdit, setSelectedAnimalToEdit] =useState('')
  const [mainAnimalEditLoader, setMainAnimalEditLoader] =useState('Loading')

      // SetUp Edit img Variables
      const [editAnimalImage, setEditAnimalImage] = useState('')
      const [editAnimalImagestate, setEditAnimalImagestate] = useState('old')
      
      // data  Variable Holder
      const [editAnimalId, setEditAnimalId] = useState('')
      const [editAnimalTitle, setEditAnimalTitle] = useState('')
      const [editAnimalContent, setEditAnimalContent] = useState('')
      const [editAnimalImageName, setEditAnimalImageName] = useState('')
      const [editAnimalDaysInCare, setEditAnimalDaysInCare] = useState('')
      const [editAnimalAge, setEditAnimalAge] = useState('')
      const [editAnimalSex, setEditAnimalSex] = useState('')
      const [editAnimalDetails, setEditAnimalDetails] = useState('')


    useEffect(() => {
        fetch('http://localhost:6464/get/animal/' + props.selectedAnimalData)
        .then(response => response.json())
        .then((data) => {setSelectedAnimalToEdit(data)})
        .then(()=>{setMainAnimalEditLoader('Done')})
    }, [props.selectedAnimalData])
    

    const handelImageChange = (e) => {
        setEditAnimalImage(e.target.files[0])
    }
    const applyNewImage = (e)=> {
        if(editAnimalImage != '') {
            setEditAnimalImagestate('new')
        }
    }


    const currentImageShower = (e)=> {
        if(editAnimalImagestate == 'old') {
        return(
             <img src={require('../../../../../../../../../../../../backend/assets/animals/' + selectedAnimalToEdit[0].image)} alt=""/>      
        )
        } 
        
        if(editAnimalImagestate == 'new') {
            return(
                 <div></div>
               
            )
        }
    }

    const onChangeAnimalTitle = (e) => {
        setEditAnimalTitle(e.target.value)
        selectedAnimalToEdit[0].title = e.target.value
    }

    const onChangeAnimalContent = (e) => {
        setEditAnimalContent(e.target.value)
        selectedAnimalToEdit[0].content = e.target.value
    }

    const onChangeAnimalDaysInCare = (e) => {
        setEditAnimalDaysInCare(e.target.value)
        selectedAnimalToEdit[0].daysInCare = e.target.value
    }

    const onChangeAnimalAge = (e) => {
        setEditAnimalAge(e.target.value)
        selectedAnimalToEdit[0].age = e.target.value
    }

    const onChangeAnimalSex  = (e) => {
        setEditAnimalSex(e.target.value)
        selectedAnimalToEdit[0].sex = e.target.value
    }

    const onChangeAnimalDetails = (e) => {
        setEditAnimalDetails(e.target.value)
        selectedAnimalToEdit[0].detials = e.target.value
    }



    const readyUpadate = (e) => {
        setEditAnimalId(selectedAnimalToEdit[0].id)
        setEditAnimalTitle(selectedAnimalToEdit[0].title)
        setEditAnimalContent(selectedAnimalToEdit[0].content)
        setEditAnimalImageName(selectedAnimalToEdit[0].image)
        setEditAnimalDaysInCare(selectedAnimalToEdit[0].daysInCare)
        setEditAnimalAge(selectedAnimalToEdit[0].age)
        setEditAnimalSex(selectedAnimalToEdit[0].sex)
        setEditAnimalDetails(selectedAnimalToEdit[0].details)
    }

    
    const completeUpdateOfAnimal = (e) => {

        const editAnimaltObject = {
            id:editAnimalId,
            title:editAnimalTitle,
            content: editAnimalContent,
            image:editAnimalImageName,
            daysInCare: editAnimalDaysInCare,
            age:editAnimalAge,
            sex: editAnimalSex,
            details:editAnimalDetails
        }

        axios.post('http://localhost:6464/edit/animal/' + selectedAnimalToEdit[0]._id , editAnimaltObject)
        .then( res => console.log(res.data))

    }

    const saveAnimalEditFunction = (e) => {

        if(editAnimalId == '' || editAnimalTitle== '' || editAnimalContent==''|| editAnimalImageName=='' || editAnimalDaysInCare=='' || editAnimalAge == '' || editAnimalSex == '' || editAnimalDetails== ''){
            return(
                <div onClick={readyUpadate}>
                    <p>Klargør Updatering</p>
                </div>
            )
        } else {
            return(
                <div onClick={completeUpdateOfAnimal}>
                    <p>Gem Updatering</p>
                </div>
            )
        }
  
    }

    if ( mainAnimalEditLoader == 'Loading') {
        if (props.selectedAnimalData == '') {
            return(
                <div className="noMainAnimalSelectedYet">
                    <p>Vælg et dyr</p>
                </div>
            )
        } else {

        return(
            <div>
                <p>Loading</p>
            </div>
        )}
    } else {
        return (
            <div className='editAnimalMainStyle'>

            <div>
                {currentImageShower()}
                {/* <div className='flexer'>
                <input type="file"  onChange={handelImageChange}/>
                <div className='imageChangerButton' onClick={applyNewImage}>
                    <p>Ændre Billede</p>
                </div>
                </div> */}
            </div>
        

            <form>
                <label>Navn:</label>
                <input type="text" placeholder='navn...' value={selectedAnimalToEdit[0].title} onChange={onChangeAnimalTitle}/>
                <label>Beskrivelse:</label>
                <textarea placeholder='Bekrkivelse...'  value={selectedAnimalToEdit[0].content} onChange={onChangeAnimalContent}></textarea>
                <label>Dage i vores system:</label>
                <input type="text" placeholder='Dage i vores system...'  value={selectedAnimalToEdit[0].daysInCare} onChange={onChangeAnimalDaysInCare}/>
                <label>Alder:</label>
                <input type="text" placeholder='Alder...' value={selectedAnimalToEdit[0].age} onChange={onChangeAnimalAge}/>
                <label>Køn:</label>
                <input type="text" placeholder='Køn...' value={selectedAnimalToEdit[0].sex} onChange={onChangeAnimalSex}/>
                <label>note:</label>
                <input type="text" placeholder='note...'  value={selectedAnimalToEdit[0].details} onChange={onChangeAnimalDetails}/>
            </form>

            <div className='editAnimalFinisher'>
            {saveAnimalEditFunction()}
            </div>


            </div>
        )
    

    }

}

export default EditAnimalMainComponent