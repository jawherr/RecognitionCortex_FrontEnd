import { Utilisateur } from "./utilisateur";

export interface Employe_speciality
{
    id?: number;
    titre : string;
    description : string;
    utilisateur? : Utilisateur;
}

export class Employe_speciality
{
    id?: number;
    titre : string;
    description : string;
    utilisateur? : Utilisateur;


    constructor(titre:string, description:string) {
        this.titre = titre;
        this.description = description;
      }
    
}