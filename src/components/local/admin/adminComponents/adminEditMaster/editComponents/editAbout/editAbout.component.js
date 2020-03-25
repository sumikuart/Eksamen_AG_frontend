// Main:
import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from  'axios';
import './editAbout.style.scss'



const EditAboutComponent = () => {

    const [aboutData, setAboutData] = useState('')
    const [aboutLoader, setAboutLoader] = useState('Loading')

    useEffect(() => {
        fetch('http://localhost:6464/get/about')
            .then(response => response.json())
            .then((data) => { setAboutData(data) })
            .then(() => { setAboutLoader('Done') })

    }, [])


    // Edit Consts
    const [aboutContent1, setAboutContent1] = useState('')
    const [aboutTitle2, setAboutTitle2] = useState('')
    const [aboutContent2, setAboutContent2] = useState('')
    const [aboutTitle3, setAboutTitle3] = useState('')
    const [aboutContent3, setAboutContent3] = useState('')
    const [saftyNetSaver, setSaftyNetSaver] = useState('Not Save')

    // Gem Ændringer:

    const prepareSave =  (e) =>{

        if( aboutTitle2 == '') {
            setAboutTitle2(aboutData[0].title_2);
        }
        if( aboutTitle3 == '') {
            setAboutTitle3(aboutData[0].title_3);
        }

        if( aboutContent1 == '') {
            setAboutContent1(aboutData[0].content_1);
        }

        if( aboutContent2 == '') {
            setAboutContent2(aboutData[0].content_2);
        }

        if( aboutContent3 == '') {
            setAboutContent3(aboutData[0].content_3);
        }

        setSaftyNetSaver('safe')

    }

    const aboutEditSaveFunction = (e)=>{

        
        console.log(aboutContent1)
        console.log(aboutTitle2)
        console.log(aboutContent2)
        console.log(aboutTitle3)
        console.log(aboutContent3)

        if( aboutTitle2 == '' || aboutTitle3 == '' || aboutContent1 == '' ||aboutContent2 == ''||aboutContent3 == '' ) {
            
        console.log('error')
        } else {

            const editAboutObject = {
                id:'1',
                title_1:"Om  os",
                content_1: aboutContent1,
                title_2:aboutTitle2,
                content_2: aboutContent2,
                title_3:aboutTitle3,
                content_3: aboutContent3
            }
    
            axios.post('http://localhost:6464/edit/about/5e78712d89ab695b3c8dc8a5', editAboutObject)
            .then( res => console.log(res.data))

            setSaftyNetSaver('Not Save')
    
        }

    }

    
    const saveCreator = (e) => {
        if(saftyNetSaver == 'Not Save') {
            return (
                <div className="aboutSaveButton" onClick={prepareSave}>
                    <p>klargør Ændringer</p>
                </div>
            )
        } else {
        return (
            <div className="aboutSaveButton" onClick={aboutEditSaveFunction}>
                <p>Gem Ændringer</p>
            </div>

        )}
    }

    if (aboutLoader == 'Loading') {

        return (
            <div className='editAboutStyle'>
                <p>Loading</p>
            </div>
        )
    } else {

        
        return (
            <div className='editAboutStyle'>

                <p className="sectionheadline">Om os</p>

                <div className="sectionsDeler">
                    <p className="sectionheadline">Intro</p>

                    <p>Redigere intro område</p>

                    <CKEditor
                        editor={ClassicEditor}
                        data={aboutData[0].content_1}
                        onInit={  editor => {} }
                            onChange={ ( event, editor ) => {
                            setAboutContent1(editor.getData())
                    } }
                       
                    />

                    {saveCreator()}


                </div>


                <div className="sectionsDeler">

                    <p className="sectionheadline">Section 1</p>
                    <p >Redigere titel til undersection 1</p>

                    <CKEditor
                        editor={ClassicEditor}
                        data={aboutData[0].title_2}
                        onInit={  editor => {} }
                            onChange={ ( event, editor ) => {
                            setAboutTitle2(editor.getData())
                    } }
                       
                    />

                    <p className="aboutBeskriver">Redigere indhold til undersection 1</p>

                    <CKEditor
                        editor={ClassicEditor}
                        data={aboutData[0].content_2}
                        onInit={  editor => {} }
                            onChange={ ( event, editor ) => {
                            setAboutContent2(editor.getData())
                    } }
                    />

                    {saveCreator()}
                </div>

                <div className="sectionsDeler">
                    <p className="sectionheadline">Section 2</p>
                    <p >Redigere titel til undersection2</p>
                    <CKEditor
                        editor={ClassicEditor}
                        data={aboutData[0].title_3}
                        onInit={  editor => {} }
                            onChange={ ( event, editor ) => {
                            setAboutTitle3(editor.getData())
                    } }
                       
                    />


                    <p className="aboutBeskriver">Redigere indhold til undersection 2</p>

                    <CKEditor
                        editor={ClassicEditor}
                        data={aboutData[0].content_3}
                        onInit={  editor => {} }
                            onChange={ ( event, editor ) => {
                            setAboutContent3(editor.getData())
                    } }
                    />

                    {saveCreator()}
                </div>

            </div>
        )
    }

}

export default EditAboutComponent

