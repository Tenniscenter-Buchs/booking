const express = require('express');
const router = express.Router();
import {ping} from "../../controllers"

/**
 *  @openapi
 *  /ping:
 *    get:
 *      summary: Returns "pong"
 *      description: Simple ping route to check whether the API is reachable
 *      responses:
 *        200:
 *          description: Returns "pong" just for the fun of it
 **/
router.get('/ping', ping);

export default router;
