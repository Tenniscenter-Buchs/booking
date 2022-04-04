import express from 'express';
const router = express.Router();
import { pong, courts } from '../../../controllers';

/**
 * GET /secure/pong
 * @summary Dummy endpoint to test whether authentication is working
 * @security JWTAuth
 * @tags pingpong
 * @return 200 - Success, authorization accepted  - text/plain
 * @return 401 - Unauthorized - text/plain
 */
router.get('/pong', pong);

/**
 * An Address
 * @typedef {object} Address
 * @property {number} id - The id - integer
 * @property {string} streetName - The address street
 * @property {string} houseNumber - The address house number
 * @property {string} postalCode - The address postal code
 * @property {string} city - The address city
 * @property {string} province - The address province
 * @property {string} country - The address country
 */
/**
 * A User
 * @typedef {object} User
 * @property {number} id - The id - integer
 * @property {string} firstName - The user's first name
 * @property {string} lastName - The user's last name
 * @property {string} email - The user's email address
 * @property {boolean} signupComplete - True, if the user has completed the sign up process
 * @property {boolean} emailVerified - True, if the user's email in the payload has been verified
 * @property {string} supertokensId - The user id for the SuperTokens API
 * @property {Address} residenceAddress - The user's residence address
 * @property {Address} billingAddress - The user's billing address
 * @property {string} role - The user's authorization role
 */
/**
 * A Court
 * @typedef {object} Court
 * @property {number} id - The id - integer
 * @property {string} description - The court description
 */
/**
 * A CourtReservationSlot
 * @typedef {object} CourtReservationSlot
 * @property {number} id - The id - integer
 * @property {Court} court - The court of the slot
 * @property {string} startTime - The slot start time
 * @property {string} endTime - The slot end time
 */
/**
 * A CourtReservation
 * @typedef {object} CourtReservation
 * @property {number} id - The id - integer
 * @property {CourtReservationSlot} slot - The reservation slot
 * @property {User} user - The reservation user
 */
/**
 * GET /secure/courts
 * @summary Returns a list of all future court reservations, in ascending order by date
 * @security JWTAuth
 * @tags courts
 * @return {array<CourtReservation>} 200 - success response - application/json
 * @return 401 - Unauthorized - text/plain
 */
router.get('/courts', courts);

export { router as sec };
