import { Utilisateur } from "./utilisateur";

export interface Recompense
{
    id?: number; 
    nom : string; 
    valeur : number;
    utilisateur? : Utilisateur;
}

export class Recompense
{
    id?: number; 
    nom : string; 
    valeur : number;
    utilisateur? : Utilisateur;


    constructor(nom: string,valeur : number) {
        this.nom = nom;
        this.valeur = valeur; 
      }
    
}