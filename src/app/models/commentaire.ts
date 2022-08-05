import { Publication } from "./publication";

export interface Commentaire
{
    id?: number;
    libelle : string;
    publication? : Publication;
}

export class Commentaire
{
    id?: number;
    libelle : string;
    publication? : Publication;


    constructor(libelle: string) {
        this.libelle = libelle;
      }
    
}