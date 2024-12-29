import { Sequelize } from "sequelize";
import { envs } from "./envs";

export const sequelize = new Sequelize(envs.MYSQL_URL,{
    logging: (msg: string) => console.log(msg),
})