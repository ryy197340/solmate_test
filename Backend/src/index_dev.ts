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
const  { router } = require("./services");


// create express app
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.set('/', router);

app.listen(PORT_NUMBER);

console.log(`Solmate Presale API has started on ${PORT_NUMBER} port.`);