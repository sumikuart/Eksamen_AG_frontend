// Main:
import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';

import './newsLetter.style.scss'



const NewsLetterComponentent = () => {

    const [newsLetterEmail, setNewsLetterEmail] = useState('')
    const [newsLetterName, setNewsLetterName] = useState('')

    const [newsLetterEmailError, setNewsLetterEmailError] = useState(' ')
    const [newsLetterNameError, setNewsLetterNameError] = useState(' ')

    
    const [newsLetterLoader, setNewsLetterLoader] = useState('Loading')
    const [completeEmailList, setCompleteEmailList] = useState('')

    useEffect(() => {
        fetch('http://localhost:6464/get/newslettermail')
        .then(response => response.json())
        .then((data) => {setCompleteEmailList(data)})
        .then(()=>{setNewsLetterLoader('done')})
    }, [])

    // Variabler Updaters:
    const updaterEmail = (e) => {
        setNewsLetterEmail(e.target.value)
    }
    
    const updaterName = (e) => {
        setNewsLetterName(e.target.value)
    }
    
    // Validering:
    var hasNumber = /\d/;

    const validerNewsLetterEmail =() => {

        if(!newsLetterEmail.includes('@')  || !newsLetterEmail.includes('.')){
            setNewsLetterEmailError('Email: Dette er ikke en godkendt Email')
        } else {
            setNewsLetterEmailError('')
        }
        if(newsLetterEmail == ""){
            setNewsLetterEmailError('Email: Tast venneligst en godkendt email ind')
        }

    }

    const validerNewsLetterName =() => {

        if(hasNumber.test(newsLetterName)){
            setNewsLetterNameError('Navn: Dette er ikke et godkendt navn')
        } else  {
            setNewsLetterNameError('')
        }

        if(newsLetterName ==="") {
            setNewsLetterNameError('Navn: Tast venneligst et godkendt Navn ind')
        }
    }

    const submitEmail = () => {
        {validerNewsLetterEmail()}
        {validerNewsLetterName()}

        for(var i = 0; i < completeEmailList.length; i++){
            if(newsLetterEmail == completeEmailList[i].email){
                setNewsLetterNameError('Denne Mail eksistere allerede i vores system')
                return
            }
        }

        if( newsLetterEmailError == '' &&  newsLetterNameError == ''){

            const addNewEmail  ={
                email:newsLetterEmail,
                name: newsLetterName
            }

            completeEmailList.push(addNewEmail)

            axios.post('http://localhost:6464/add/newslettermail', addNewEmail)
            .then(res => console.log(res.data))
        
            setNewsLetterEmailError('Tak for tilmeldingen ' + newsLetterName)
            setNewsLetterEmail('')
            setNewsLetterName('')
        
        }
    
    }

    if( newsLetterLoader == 'Loading') {
        return(
            <div className='newsLetterStyle'>
                <div className='newsLetterContent'>
                <p>Loading</p>
                </div>
            </div>
        )
    } else {
    return (
        <div className='newsLetterStyle'>

            <div className='newsLetterContent'>
                <p className="newsLetterHeadling">Tilmeld vores nyhedsbrev</p>

                <div className="flexer newsLetterMainContent">

                    <div className="newsLetterTekst">
                        <p>Få inspiration og nyheder om dyrevelfærd og vores arbejde, direkte i din indbakke</p>
                    </div>

                    <div className="newsLetterForm">
                        <form>
                            <input type="text" placeholder="Email" value={newsLetterEmail} onChange={updaterEmail} onBlur={validerNewsLetterEmail}/>
                            <input type="text" placeholder="Navn" value={newsLetterName} onChange={updaterName} onBlur={validerNewsLetterName}/>
                        </form>
                    </div>
                </div>

                <div className="newsLetterErrorHolder">
                    <p>{newsLetterEmailError}</p>
                    <p>{newsLetterNameError}</p>
                </div>

                <div className="newsLetterSubmitButton" onClick={submitEmail}>
                    <p>Tilmeld</p>
                </div>
            </div>

        </div>
    ) }

}

export default NewsLetterComponentent