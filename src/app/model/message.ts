import { Utilisateur } from "./utilisateur";

export interface Message
{
    id?: number;
    date : Date;
    description : string;
    sender : number;
    receiver: number;
    utilisateur?: Utilisateur;
}

export class Message
{
    id?: number;
    date : Date;
    description : string;
    sender : number;
    receiver: number;
    utilisateur?: Utilisateur;


    constructor(date:Date, description:string, sender: number, receiver: number) {
        this.date = date;
        this.description = description;
        this.sender = sender;
        this.receiver = receiver;
      }
    
}