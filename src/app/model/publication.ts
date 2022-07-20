import { Utilisateur } from "./utilisateur";

export interface Publication
{
    id?: number ; 
    description : string ; 
    nb_like : number ;
    utilisateur? : Utilisateur;

}

export class Publication
{
    id?: number ; 
    description : string ; 
    nb_like : number ;
    utilisateur? : Utilisateur;


    constructor(description: string,nb_like : number) {
        this.description = description;
        this.nb_like = nb_like ; 
      }
    
}