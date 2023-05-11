import React, {useRef, useEffect, useState} from 'react';

export default function add(){

    // On cibler les imputs 
    const enWords = useRef();
    const frWords = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newWord = {
            en : enWords.current.value,
            fr : frWords.current.value
        }

        // Requte POST => comunication avec "api/vocabulaire"
        fetch("api/vocabulaire", {
            method : "POST",
            body : JSON.stringify(newWord), //transformer en JSON
            headers : {
                "Content-Type" : "application/json"
            }
        })
        .then(res => res.json())
        .then(data => console.log(data));
        
        enWords.current.value = "";
        frWords.current.value = "";
    }

    return (

        <div className='container p-4'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="addEn" className="form-label">
                    Ajoutez un mot en Anglais
                </label>
                <input ref={enWords} id="addEn" type="text" 
                    className="form-control mb-2" 
                />
                <label htmlFor="addFr" className="form-label">
                    La traduction en Français
                </label>
                <input ref={frWords} id="addFr" type="text" 
                    className="form-control mb-3"                     
                />
                <button className='btn btn-success '>Ajouter</button>
            </form>
        </div>
    );
};

