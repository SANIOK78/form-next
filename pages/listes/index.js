import React from 'react';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

export default function index(props) {
    
    console.log(props);

    return (
        <div className='container'>

            <h1 className='my-4'>Les listes du vocabulaire</h1>

            <ul className="list-group">
                {
                    props.array.map((item) => {
                        return (
                            <li className="list-group-item" key={uuidv4()}>

                                <Link href={`/listes/${item.name}`}>
                                   { item.name }
                                </Link>

                            </li>
                        )
                    })
                }
            </ul>

        </div>
    );
};


export async function getStaticProps() {
    
    //1. importation des données (depuis "data/lists.json")
    const data = await import(`/data/lists.json`)
    //2. on extrait le tableau "englishList"
    const array = data.englishList;
 
    return {
      props: {
        array
      }
    }
}
  