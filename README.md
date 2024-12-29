## ESTO ES UNA BASE INICIAL DE UN PROYECTO CON DOCKER

Solo es levantar, crear la base de dato correspondientes, con los modelos correspondientes.


# FUNCIONAMIENTO DE LA API

## RESUMEN
Este proyecto esta basado en el PI de henry, pero se esta realizando desde cero, es decir, la infrastructura de la *API* se esta usando typescript y no js, además se quiere aplicar principios de **arquictetura limpia** especificiamente el *patron repository*

## Instalaciones realizadas 

### Configuración servidor typescript
    1. Instalar TypeScript y demás dependencias
    ```
    npm i -D typescript @types/node ts-node-dev rimraf
    ```
    2. Inicializar el archivo de configuración de TypeScript ( Se puede configurar al gusto)
    ```
    npx tsc --init --outDir dist/ --rootDir src
    ```

    3. Crear scripts para dev, build y start ([Más sobre TS-Node-dev aquí](https://www.npmjs.com/package/ts-node-dev))
    ```
    "dev": "tsnd --respawn --clear src/app.ts",
    "build": "rimraf ./dist && tsc",
    "start": "npm run build && node dist/app.js"


### Instalaciones de paquetes

1. npm install express --save
    1.1  npm i --save-dev @types/express
2. npm i dotenv env-var
3. npm install sequelize mysql2

## Levantar compose
docker compose up -d


