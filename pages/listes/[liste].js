import React from 'react';
import styles from '../../styles/Home.module.css';
import { v4 as uuidv4 } from 'uuid';
// "useRouter" => pour avoir des infos sur la route en cours
import { useRouter } from 'next/router';

export default function liste(props) {

    const router = useRouter();
    
    if( !props.listeEnCours){
        return <h1>Chargement</h1>
    }
    
    return (
        <div className='container'>
            {/* Premier lettre en maj + le reste en min */}
            <h1 className={styles.titre}>Liste des {" "}   
                {router.query.liste.charAt(0).toUpperCase() + router.query.liste.slice(1) }
            </h1> 

            <table className={styles.tableau}>
                <tbody>

                    {props.listeEnCours.map((el)=> {
                        return (
                            <tr key={uuidv4()}>
                                <td>{el.en}</td>
                                <td>{el.fr}</td>
                            </tr>
                        )
                    })}
                </tbody>              
            </table>
        </div>
    );
};

// page static
export async function getStaticProps(context) {

    const infosListe = context.params.liste;
    const data = await import('/data/lists.json');

    const listeEnCours = data.englishList.find(el => el.name === infosListe)

    // Paramétrage pour renvoier un page 404 personalis' en cas de 
    // chamin inexistant
    if( !listeEnCours) {
        return {
            notFound : true
        }
    }

    return {
        props: {
            listeEnCours : listeEnCours.data
        }
    }
}

// chemin dynamic
export async function getStaticPaths() {
    // recup données
    const data = await import('/data/lists.json')

    // On va extraire tous les element "nome"
    const paths = data.englishList.map(item => {
        return {
            // "liste" = [liste].js (chemin dinamic)
            params : {liste : item.name }
        }
    })

    // Return un objet avec une propriété "paths": []
    return {
        // paths : [
        //     // Création page static avec le nom "words"
        //     {params : {liste: "words"}},
        //     {params : {liste: "verbes"}},
        //     {params : {liste: "adjectives"}}
        // ],
        paths,
        fallback: false 
    }
}

