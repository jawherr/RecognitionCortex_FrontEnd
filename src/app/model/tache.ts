import { Dossier } from "./dossier";

export interface Tache 
{
    id?: number ; 
    nom : string; 
    type : string; 
    date_fin : Date;
    date_debut : Date;
    dossier? : Dossier ;
}

export class Solde 
{
    id?: number ; 
    nom : string; 
    type : string; 
    date_fin : Date;
    date_debut : Date;
    dossier? : Dossier ;



    constructor(nom: string, type: string, date_fin : Date, date_debut: Date) {
        this.nom = nom;
        this.type = type;
        this.date_fin = date_fin;
        this.date_debut = date_debut;
      }
    
}