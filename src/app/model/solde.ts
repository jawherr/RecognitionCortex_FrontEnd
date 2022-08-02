import { Utilisateur } from "./utilisateur";

export interface Solde 
{
    id?: number ; 
    valeur : number; 
    utilisateur? : Utilisateur ;
}

export class Solde 
{
    id?: number ; 
    valeur : number; 
    utilisateur? : Utilisateur ;



    constructor(valeur: number) {
        this.valeur = valeur;
      }
    
}