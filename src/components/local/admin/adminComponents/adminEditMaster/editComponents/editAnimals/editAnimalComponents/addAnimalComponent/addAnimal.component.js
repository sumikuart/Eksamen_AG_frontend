
// Main:
import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import axios from'axios'

import './addAnimal.style.scss'



const AddAnimalComponent = (props) => {

    const [addanimalTitle,setAnimalTitle]= useState('')
    const [addanimalContent,setAnimalContent]= useState('')
    const [addanimalDaysInCare,setAnimalDaysInCare]= useState('')
    const [addanimalAge,setAnimalAge]= useState('')
    const [addanimaSex,setAnimalSex]= useState('')
    const [addanimaDetail,setAnimalDetail]= useState('')
    const [addAnimaImage,setAddAnimalImage]= useState('')

    const [addanimalTitleError,setAnimalTitleError]= useState('- Husk navn')
    const [addanimalContentError,setAnimalContentError]= useState('- Husk Beskrivelse')
    const [addanimalDaysInCareError,setAnimalDaysInCareError]= useState('- Husk Antaldage i vores system')
    const [addanimalAgeError,setAnimalAgeError]= useState('- Husk Alder')
    const [addanimaSexError,setAnimalSexError]= useState('- Husk Køn')
    const [addanimaDetailError,setAnimalDetailError]= useState('- Husk Detaljer')
    const [addAnimaImageError,setAddAnimalImageError]= useState('- Husk Billede')

    const onChangeTitle = (e) => {
        setAnimalTitle(e.target.value)
    }
    const onChangeContent = (e) => {
        setAnimalContent(e.target.value)
    }
    const onChangeDaysInCare = (e) => {
        setAnimalDaysInCare(e.target.value)
    }
    const onChangeAge = (e) => {
        setAnimalAge(e.target.value)
    }
    const onChangeSex = (e) => {
        setAnimalSex(e.target.value)
    }
    const onChangeDetail = (e) => {
        setAnimalDetail(e.target.value)
    }
    const onChangeImage = (e) => {
        setAddAnimalImage(e.target.files[0])

    }

        // VALIDERING AF Ad Animals
    
        const validateTitle = (e) => {
            if(addanimalTitle == '') {
                setAnimalTitleError('Navn Mangler')
            } else {
                setAnimalTitleError('')
            }
        }
    
        const validateContent = (e) => {
            if(addanimalContent == '') {
                setAnimalContentError('Beskrivelse Mangler')
            } else {
                setAnimalContentError('')
            }
        }
    
        const validateDaysInCare = (e) => {
            if(addanimalDaysInCare == '') {
                setAnimalDaysInCareError('Antal dage Mangler')
            } else {
                setAnimalDaysInCareError('')
            }
        }
    
        const validateAge = (e) => {
            if(addanimalAge == '') {
                setAnimalAgeError('Alder Mangler')
            } else {
                setAnimalAgeError('')
            }
        }
    
        const validateSex = (e) => {
            if(addanimaSex == '') {
                setAnimalSexError('Køn Mangler')
            } else {
                setAnimalSexError('')
            }
        }
    
        const validateDetails = (e) => {
            if(addanimaDetail == '') {
                setAnimalDetailError('Detaljer Mangler')
            } else {
                setAnimalDetailError('')
            }
        }
    
        const validateImage = (e) => {
            if(addAnimaImage.name == null){
                setAddAnimalImageError('Billede Mangler')
            } else {
                setAddAnimalImageError('')
            }
        }
 
    const addAnimalFunction = (e) => {

        {validateImage()}
        {validateDetails()}
        {validateSex()}
        {validateAge()}
        {validateDaysInCare()}
        {validateContent()}
        {validateTitle()}


       if(addanimalTitleError === '' && addanimalContentError === '' &&   addanimalDaysInCareError === '' && addanimalAgeError === '' &&  addanimaSexError === '' && addanimaDetailError === '' && addAnimaImageError === '' ) {

        console.log(addanimalTitleError)

        const data = new FormData()
        data.append('file', addAnimaImage)
        
        axios.post("http://localhost:6464/add/animalImage", data, {}).then(
            res => {
                console.log(res.statusText)
            }
        )


    const addAnimalObj = {
      title:addanimalTitle,
      content:addanimalContent,
      image:addAnimaImage.name,
      daysInCare:addanimalDaysInCare,
      age:addanimalAge,
      sex:addanimaSex,
      detail:addanimaDetail
    }

    axios.post('http://localhost:6464/add/Animal', addAnimalObj)
    .then(res => console.log(res.data));

    props.setUpdateChecker('Update Please')


    setAnimalTitle('')
    setAnimalContent('')
    setAnimalDaysInCare('')
    setAnimalAge('')
    setAnimalSex('')
    setAnimalDetail('')


}

    }

    return (
        <div className='addAnimalStyle'>
            
            
        <form>
                <label>Navn:</label>
                <input type="text" placeholder='navn...' value={addanimalTitle} onChange={onChangeTitle} onBlur={validateTitle}/>
                <label>Beskrivelse:</label>
                <textarea placeholder='Bekrkivelse...' value={addanimalContent} onChange={onChangeContent} onBlur={validateContent}></textarea>
                <label>Dage i vores system:</label>
                <input type="text" placeholder='Dage i vores system...' value={addanimalDaysInCare} onChange={onChangeDaysInCare} onBlur={validateDaysInCare}/>
                <label>Alder:</label>
                <input type="text" placeholder='Alder...' value={addanimalAge} onChange={onChangeAge} onBlur={validateAge}/>
                <label>Køn:</label>
                <input type="text" placeholder='Køn...' value={addanimaSex} onChange={onChangeSex} onBlur={validateSex}/>
                <label>note:</label>
                <input type="text" placeholder='note...' value={addanimaDetail}  onChange={onChangeDetail} onBlur={validateDetails}/>
                <label>Image:</label>
                <input type="file" onChange={onChangeImage} onBlur={validateImage}/>
            </form>

            <div>
                <p>{addanimalTitleError}</p>
                <p>{addanimalContentError}</p>
                <p>{addanimalDaysInCareError}</p>
                <p>{addanimalAgeError}</p>
                <p>{addanimaSexError}</p>
                <p>{addanimaDetailError}</p>
                <p>{addAnimaImageError}</p>
            </div>

            <div className='addAnimalButton' onClick={addAnimalFunction}>
                <p>Tilføj Dyr</p>
            </div>
        </div>
    )

}

export default AddAnimalComponent