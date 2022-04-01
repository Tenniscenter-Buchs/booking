import Express from "express";
import { SessionRequest } from 'supertokens-node/framework/express';

const ping = (req: Express.Request, res: Express.Response) => {
    res.status(200).send('pong');
};

const pong = (req: SessionRequest, res: Express.Response) => {
    res.status(200).send('ping');
};

const courts = (req: SessionRequest, res: Express.Response) => {
    res.status(200).send(
        [
            { name: "Daggy", created: "7 days ago" },
            { name: "Anubra", created: "23 hours ago" },
            { name: "Josef", created: "A few seconds ago" },
            { name: "Sage", created: "A few hours ago" },
        ]
    );
}

export {ping, pong, courts};
