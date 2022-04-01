const express = require('express');
const router = express.Router();
import {pong, courts} from "../../controllers"

/**
 *  @openapi
 *  /pong:
 *    get:
 *      summary: Returns "ping"
 *      description: Simple ping route to check whether the API is reachable
 *      responses:
 *        200:
 *          description: Returns "ping" just for the fun of it
 **/
router.get('/pong', pong);

/**
 *  @openapi
 *  /courts:
 *    get:
 *      summary: Returns a historical list of courts booked by the currently authenticated user
 *      description: Returns a historical list of courts booked by the currently authenticated user
 *      responses:
 *        200:
 *          description: Returns a list of courts
 **/
router.get('/courts', courts);

export default router;
