import { Router } from "express";
import { PokemonRoutes } from "./pokemons/routes";

export class AppRoutes {

    static get routes(): Router {
        
        const router = Router();

        //! rutas --- esto es un ejemplo - lo puede cambiar según lo que necesite
        router.use('/api/pokemons', PokemonRoutes.routes);
        
        return router;
    }
    
}