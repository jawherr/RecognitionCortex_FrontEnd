
export interface Calendrier 
{
    id?: number; 
    date : Date; 
    objet : string; 
    description : string;
}

export class Calendrier 
{
    id?: number; 
    date : Date; 
    objet : string; 
    description : string;



    constructor(date: Date,objet: string,description: string) {
        this.date = date;
        this.objet = objet;
        this.description = description;
      }
    
}