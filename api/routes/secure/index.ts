const express = require('express');
const router = express.Router();
import {pong} from "../../controllers"

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

export default router;
