import { createConnection } from "typeorm";
import express from "express";
import * as bodyParser from "body-parser";
import cors from 'cors';

import * as dotenv from 'dotenv';
dotenv.config({
    path: './.env.dev'
});

import logger from "./utils/logger";
import { PORT_NUMBER } from "./config";
import { PRESALE_PRICE, TOTAL_SUPPLY } from './constants';

const routes = require("./services/routes");


async function main() {
    await createConnection();

    // create express app
    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    app.use('/', routes);

    app.listen(PORT_NUMBER, () => {
        console.log(`Solmate Presale API has started on ${PORT_NUMBER} port.`);
    });
}

main()
    .catch(console.error)