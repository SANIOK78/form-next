import React from 'react';

const contact = (props) => {

    console.log(props)

    return (
        <div>
            <h1>{props.data[0].name}</h1>
            <h2> Adresse : </h2>
            <p>{props.data[0].address.suite}</p>
            <p>{props.data[0].address.street}</p>
            <p>{props.data[0].address.city}</p>
        </div>
    );
};

export default contact;


// Récup des citation 
export async function getStaticProps(){

    const quote = await fetch("https://jsonplaceholder.typicode.com/users")
  
    const data = await quote.json()

    // Obligatoirement on return l'objet "data"
    return {
        props: {
           data
        }
        
    }
}


