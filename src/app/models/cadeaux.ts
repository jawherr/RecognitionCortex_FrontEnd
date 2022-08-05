import { Utilisateur } from "./utilisateur";

export interface Cadeaux 
{
    id?: number; 
    nom : string; 
    valeur : number; 
    utilisateur? : Utilisateur;
}

export class Cadeaux 
{
    id?: number; 
    nom : string; 
    valeur : number; 
    utilisateur? : Utilisateur;



    constructor(nom: string,valeur: number) {
        this.nom = nom;
        this.valeur = valeur;
      }
    
}