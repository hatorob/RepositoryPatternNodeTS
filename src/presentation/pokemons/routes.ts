import { Router } from "express"
import { PokemonsController } from "./controller";

export class PokemonRoutes {

    static get routes(): Router {
        
        const router = Router();
        const pokemonsController = new PokemonsController();
        /**
         * Get all pokemons
         */
        //router.get('/',);

        /**
         * Get pokemon by id
         */
        //router.get('/:id', )

        /**
         * Create a new Pokemon
         */
        router.post('/', pokemonsController.createPokemon );

        /**
         * Update pokemon by id
         */
        //router.put('/:id', )

        /**
         * Delete pokemon
         */
        //router.delete('/:id', )


        return router;
    }

}