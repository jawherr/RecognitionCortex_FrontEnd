import { Calendrier } from "./calendrier";
import { Role } from "./role";
import { Solde } from "./tache";

export interface Utilisateur 
{
    id?: number;
    email: string;
    password : string;
    nom : string;
    username : string; 
    date_naissance : Date;
    address : string;
    created_at : Date;
    updated_at : Date;
    cover_image: string;
    brief: string;
    solde?: Solde;
    calendrier?: Calendrier;
    roles?: Role[];
}

export class Utilisateur 
{
    id?: number; 
    username : string; 
    password : string; 
    roles? : Role[];



    constructor(username: string,password : string) {
        this.username = username;
        this.password = password;
    }
    
}