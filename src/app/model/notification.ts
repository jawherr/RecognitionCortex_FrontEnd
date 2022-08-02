import { Utilisateur } from "./utilisateur";

export interface Notification
{
    id?: number;
    sender: number;
    created_at: Date;
    utilisateur?: Utilisateur;
}

export class Notification
{
    id?: number;
    sender: number;
    created_at: Date;
    utilisateur?: Utilisateur;


    constructor(sender: number, created_at: Date) {
        this.sender = sender;
        this.created_at = created_at;
      }
    
}