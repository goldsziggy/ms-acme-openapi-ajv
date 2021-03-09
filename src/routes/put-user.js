/**
 * @openapi
 *  /v1/acme/user:
 *    put:
 *      description: creates a fake user of the acme service
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - firstName
 *                - lastName
 *              properties:
 *                firstName: *firstName
 *                lastName: *lastName
 *      responses:
 *        200:
 *          description: a object with the echoed firstName, lastName and a random userId.
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  firstName: *firstName
 *                  lastName: *lastName
 *                  userId: *userId
 */
const putCreate = (req, res) => {
  const { firstName, lastName } = req.body;
  const userId = Math.floor(1000 + Math.random() * 9000);
  const user = { firstName, lastName, userId: `${userId}` };
  req.db.push(user);
  return res.status(200).json(user);
};

module.exports = putCreate;
