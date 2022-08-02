import { Utilisateur } from "./utilisateur";
import { Equipe } from "./equipe";

export interface Monnaie
{
    id?: number;
    nombre: number;
    utilisateur?: Utilisateur;
    equipe?: Equipe;
}

export class Monnaie
{
    id?: number;
    nombre: number;
    utilisateur?: Utilisateur;
    equipe?: Equipe;


    constructor(nombre: number) {
        this.nombre = nombre;
      }
    
}