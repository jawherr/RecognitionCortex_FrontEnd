import { Utilisateur } from "./utilisateur";

export interface Publication
{
    id?: number; 
    description : string; 
    nb_like : number;
    nb_commenter : number;
    nb_partager : number;
    utilisateur? : Utilisateur;

}

export class Publication
{
    id?: number; 
    description : string; 
    nb_like : number;
    nb_commenter : number;
    nb_partager : number;
    utilisateur? : Utilisateur;


    constructor(description: string,nb_like : number,nb_commenter : number,nb_partager : number) {
        this.description = description;
        this.nb_like = nb_like; 
        this.nb_commenter = nb_commenter; 
        this.nb_partager = nb_partager; 
      }
    
}