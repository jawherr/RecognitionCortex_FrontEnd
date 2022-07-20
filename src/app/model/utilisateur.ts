import { Role } from "./role";

export interface Utilisateur 
{
    id?: number ; 
    username : string ; 
    password : string ; 
    roles?: Role[]
}

export class Utilisateur 
{
    id?: number ; 
    username : string ; 
    password : string ; 
    roles? : Role[]



    constructor(username: string,password : string,
        ) {
        this.username = username;
        this.password = password ;
      }
    
}