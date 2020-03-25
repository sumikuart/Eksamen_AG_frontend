// Main:
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";


import './adminEditMaster.style.scss'
import EditAboutComponent from './editComponents/editAbout/editAbout.component';
import EditAdoptComponent from './editComponents/editAdopt/editAdopt.component';
import EditVolunteersComponent from './editComponents/editVolunteers/editVolunteers.component';
import EditAnimalsComponent from './editComponents/editAnimals/editAnimals.component';

const AdminEditMasterComponent = () => {

    const [selectedEditor, setSelectedEditor]  = useState(1)

    // Selection Styler
    const [selectedStylerAbout, setselectedStylerAbout]  = useState('selected')
    const [selectedStylerAdopt, setselectedStylerAdopt]  = useState('')
    const [selectedStylerVolunteers, setselectedStylerVolunteers]  = useState('')
    const [selectedStylerAnimals, setselectedStylerAnimals]  = useState('')

    // Navigations Functinos:
    const selectedEdito = (e) => {
        if(selectedEditor == 1){
            return(
                <div>
                    <EditAboutComponent />
                </div>
            )   
        }
        if(selectedEditor == 2){
            return(
                <div>
                    <EditAdoptComponent />
                </div>
            )   
        }
        if(selectedEditor == 3){
            return(
                <div>
                    <EditVolunteersComponent />
                </div>
            )   
        }
        if(selectedEditor == 4){
            return(
                <div>
                    <EditAnimalsComponent />
                </div>
            )   
        }
    }

    const setEditorAbout = () => {
        setselectedStylerAbout('selected')
        setselectedStylerAdopt('')
        setselectedStylerVolunteers('')
        setselectedStylerAnimals('')

        setSelectedEditor(1)
    }
    
    const setEditorAdopt = () => {
        setselectedStylerAbout('')
        setselectedStylerAdopt('selected')
        setselectedStylerVolunteers('')
        setselectedStylerAnimals('')
        setSelectedEditor(2)
    }

    const setEditorVolunteers = () => {
        setselectedStylerAbout('')
        setselectedStylerAdopt('')
        setselectedStylerVolunteers('selected')
        setselectedStylerAnimals('')
        setSelectedEditor(3)
    }

    const setEditorAnimals = () => {
        setselectedStylerAbout('')
        setselectedStylerAdopt('')
        setselectedStylerVolunteers('')
        setselectedStylerAnimals('selected')
        setSelectedEditor(4)
    }



    return (
        <div className='editMasterStyle'>
            <div className="editMasterHolder">

                <div className="editSelector flexer">
                    <div className={"editSelectOption " + selectedStylerAbout} onClick={setEditorAbout}>
                        <p>About - Section</p>
                    </div>
                    <div className={"editSelectOption " +  selectedStylerAdopt} onClick={setEditorAdopt}>
                        <p>Adopt - Section</p>
                    </div>
                    <div className={"editSelectOption " + selectedStylerVolunteers}  onClick={setEditorVolunteers}>
                        <p>Volunteers - Section</p>
                    </div>
                    <div className={"editSelectOption " + selectedStylerAnimals}  onClick={setEditorAnimals}>
                        <p>Animals</p>
                    </div>
                </div>

                <div>
                    {selectedEdito()}
                </div>
            </div>
        
        </div>
    )

}

export default AdminEditMasterComponent