import { Utilisateur } from "./utilisateur";

export interface Achat 
{
    id?: number; 
    nom : string;
    nombre : number;
    montant : number;
    utilisateur? : Utilisateur;
}

export class Achat 
{
    id?: number; 
    nom : string;
    nombre : number;
    montant : number;
    utilisateur? : Utilisateur;

    constructor(nom: string, nombre: number, montant: number) {
        this.nom = nom;
        this.nombre = nombre;
        this.montant = montant;
      }
    
}