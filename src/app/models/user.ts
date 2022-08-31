import { Calendrier } from "./calendrier";
import { Role } from "./role";
import { Solde } from "./solde";

export interface User 
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

export class User 
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


    constructor(username: string,email: string, nom:string,
        address: string) {
        this.username = username;
        this.email = email ;
        this.nom = nom;
        this.address = address ;
    }
    
}