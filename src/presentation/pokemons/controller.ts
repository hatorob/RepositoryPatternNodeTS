import { Request, Response } from 'express';
import { Pokemon } from "../../models/Pokemons/Pokemon.model";


export class PokemonsController {

    constructor() {}

    public createPokemon = async (req: Request, res: Response) => {
        const { name, image, life, attack, defense, speed, height, weight } = req.body;
        console.log(name, image, life, attack, defense, speed, height, weight);
        let todo = {prueba: "prueba"}
        return res.json( todo );
    }
}

