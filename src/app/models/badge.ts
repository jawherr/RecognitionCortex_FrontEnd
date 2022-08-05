import { Utilisateur } from "./utilisateur";

export interface Badge 
{
    id?: number; 
    nom : string; 
    image : string; 
    description: string; 
    utilisateur? : Utilisateur;
}

export class Badge 
{
    id?: number; 
    nom : string; 
    image : string; 
    description: string; 
    utilisateur? : Utilisateur;



    constructor(nom: string,image: string,description: string) {
        this.nom = nom;
        this.image = image;
        this.description = description;
      }
    
}