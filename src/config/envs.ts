import 'dotenv/config';
import { get } from 'env-var';

export const envs = {
    PORT: get('PORT').required().asPortNumber(),
    MYSQL_URL: get('MYSQL_URL').required().asUrlString(),
    MYSQL_DB: get('MYSQL_DB').required().asString(),
    MYSQL_ROOT_PASSWORD: get('MYSQL_ROOT_PASSWORD').required().asString(),
}