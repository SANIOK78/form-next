import React, {useState, useEffect} from "react"
import styles from '@/styles/Home.module.css';
// "Head" qui va permettre la personnalisation du <head>
import Head from 'next/head';
import { v4 as uuidv4 } from 'uuid';

export default function Home(props) {
  const [state, setState] = React.useState(false);
  
  useEffect(() => {
    newWords();
  }, [] );

  // Variable pour isoler les mots et le tableau "words"
  let randomWord;
  if(state){
    // le tableau "words"
    const array = state.englishList[0].data;
    // On sort un mot au hasard
    randomWord = array[Math.floor(Math.random() * array.length)].en;
  }

  const newWords = () => {
    fetch('/api/vocabulaire')
    .then(response => response.json())
    .then(data => setState(data))
  }

  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Titre</title>
      </Head>
      
      <div>
              
        <h1 className={styles.titre}>Mot au hasard !!!</h1> 

        {/* <table className={styles.tableau}>
          <tbody>

            {props.array.map((el)=> {
              return (
                <tr key={uuidv4()}>
                  <td>{el.en}</td>
                  <td>{el.fr}</td>
                </tr>
              )
            })}

          </tbody>              
        </table> */}
        <button 
          onClick={newWords}
          className="btn btn-primary d-block m-auto ">
          Get RANDOM WORDS
        </button>

        <h2 className="text-center mt-5">{randomWord}</h2>

      </div>
    </>   
  )
}

export async function getStaticProps() {
  // importation des données (depuis "data/vocabulary.json")
  const data = await import(`/data/vocabulary.json`)
  // on extrait le tableau
  const array = data.vocabulary;

  return {
    props: {
      array
    }
  }
}

