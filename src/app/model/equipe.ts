import { Utilisateur } from "./utilisateur";
import { Calendrier } from "./calendrier";
import { Dossier } from "./dossier";

export interface Equipe
{
    id?: number;
    nom : string;
    objectif : string;
    utilisateur? : Utilisateur;
    calendrier?: Calendrier;
    dossier?: Dossier;
}

export class Equipe
{
    id?: number;
    nom : string;
    objectif : string;
    utilisateur? : Utilisateur;
    calendrier?: Calendrier;
    dossier?: Dossier;


    constructor(nom:string, objectif:string) {
        this.nom = nom;
        this.objectif = objectif;
      }
    
}