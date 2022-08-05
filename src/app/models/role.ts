
export interface Role 
{
    id?: number ; 
    nom : string ; 
}

export class Role 
{
    id?: number ; 
    nom : string ; 



    constructor(nom: string) {
        this.nom = nom;       
      }
    
}