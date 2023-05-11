import React from 'react';
// import "fs" et "path" pour travailler avec des 
// fichiers côté Serveur
import fs from "fs";
import path from 'path'

export default function handler(req, res) {
    
    if(req.method === "GET"){

        // recuperation du chemin
        const filePath = path.join(process.cwd(),'data', 'lists.json' );
        // On va lire ce fichier
        const fileData = fs.readFileSync(filePath);
        // On va "parcer" ce fichier comprehainssible en JS
        const data = JSON.parse(fileData)

        res.status(200).json(data);

    } else if(req.method === "POST") {  //s'il y une requete "POST"

        const enWord = req.body.en;
        const frWord = req.body.fr;

        // on va créer l'Objet
        const newWord = {
            en : enWord,
            fr : frWord
        }

        // recuperation du chemin
        const filePath = path.join(process.cwd(), 'data', 'lists.json' );
        // on doit remplacer l'ancien fichier avec le nouveau
        const fileData = fs.readFileSync(filePath);
        // transformation en fichier ".js" a partir du "json"
        const data = JSON.parse(fileData)

        // envoit vers la BD
        data.englishList[0].data.push(newWord)

        // Création d'un nouveau fichier en remplasant l'encien et en
        // transformat le "js" en "json"
        fs.writeFileSync(filePath, JSON.stringify(data));

        // la reponse
        res.status(201).json({message: "Succès !!!"})
    }
}
