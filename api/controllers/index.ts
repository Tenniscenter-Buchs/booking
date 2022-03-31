import Express from "express";
import { SessionRequest } from 'supertokens-node/framework/express';

import database from "../database";

import sequelize from 'sequelize';

const ping = (req: Express.Request, res: Express.Response) => {
    res.status(200).send('pong');
};

const pong = (req: SessionRequest, res: Express.Response) => {
    res.status(200).send('ping');
};

const courts = (req: SessionRequest, res: Express.Response) => {
    database.query('SELECT * FROM court_reservations', (error, data) => {
        if (error) res.status(500).send(error);
        res.status(200).send(data.rows);
    });
}

export {ping, pong, courts};
