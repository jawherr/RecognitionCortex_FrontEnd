
export interface Dossier
{
    id?: number;
    date : Date;
    remarque : string;
    description : string;
}

export class Dossier
{
    id?: number;
    date : Date;
    remarque : string;
    description : string;


    constructor(date: Date, remarque:string, description:string) {
        this.date = date;
        this.remarque = remarque;
        this.description = description;
      }
    
}