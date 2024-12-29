import { envs } from "./config/envs";
import { ServerApp } from "./presentation/server";
import { AppRoutes } from "./presentation/routes";
import { Pokemon } from "./models/Pokemons/Pokemon.model";
import { Type } from "./models/Types/Type.model";
import { sequelize } from "./config/sequelize";
import { defineAssociations } from "./models/associate";

const main = async () => {

    //! conection with BD and create table
    /* try {
        //! HT -> si no creo la variable models con un arreglo donde se encuentre los modelos creados, este no me lo creará en la BD con el sequelize.sync
        const models = [Pokemon,Type]
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        defineAssociations();
        await sequelize.sync({ alter: true });
        console.log(`sync to tables success..`);
    } catch (error) {
        console.log(`Error to configurate to tables: ${error}`);
    } */

    const server = new ServerApp({
        port: envs.PORT,
        routes: AppRoutes.routes,
    })
    server.start();
}


( async() => {
    main();
})();