import React from 'react';

export default function coursBitcoin (props){

    console.log(props)

    return (
        <div>
            <h1 className='text-center my-2'>
                Le cours de Bitcoin est à : 
                <p>{props.result.bpi.EUR.rate}€</p>
            </h1>
           
        </div>
    );
};

// Méthode pour avoir un rendu côte Serveur
export async function getServerSideProps(context){

    console.log(context)
    
    const data = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    const result = await data.json();

    return {
        props: {
            result
        }
    }
}


