import { Pet } from "./Pet";


export interface Relatorio {
    id: string;
    email: string;
    valor: string;
    pet: Pet
}