import express, { Router } from 'express';

interface OptionsServer {
    port: number,
    routes: Router,
}


export class ServerApp {

    private app = express();
    private readonly port: number;
    private readonly routes: Router;
    //TODO -> Pendiente el de routers

    constructor( optionsServer: OptionsServer) {
        const { port, routes } = optionsServer;
        this.port = port;
        this.routes = routes
    }

    /**
     * Corre el servidor de mi API
     */
    async start() {

        //* Middlewares
        this.app.use(express.json()); // Necesario para procesar JSON en req.body
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use( this.routes );
        this.app.listen( this.port, () => {
            console.log(`Server running on port ${this.port}`);
        })
    }
    

}