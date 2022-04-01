import Express from 'express';
import { SessionRequest } from 'supertokens-node/framework/express';

import { AppDataSource } from '../data-source';
import { User } from '../entity/User';

const ping = (req: Express.Request, res: Express.Response) => {
    res.status(200).send('pong');
};

const pong = (req: SessionRequest, res: Express.Response) => {
    res.status(200).send('ping');
};

const courts = async (req: SessionRequest, res: Express.Response) => {
    const users = await AppDataSource.getRepository(User).createQueryBuilder().getMany();
    res.status(200).send(users);
};

export {ping, pong, courts};
