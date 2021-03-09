/**
 * @openapi
 *  /v1/acme/user/{userId}:
 *    get:
 *      description: gets a previously created fake-user
 *      parameters:
 *        - name: userId
 *          in: path
 *          required: true
 *          schema:
 *            <<: *userId
 *      responses:
 *        200:
 *          description: a object with the users firstName, lastName and userId.
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  firstName: *firstName
 *                  lastName: *lastName
 *                  userId: *userId
 *        404:
 *          description: a blank 404 response to indicate no user found.
 */
const putCreate = (req, res) => {
  const { userId: requestedId } = req.params;
  const user = req.db.find(({ userId }) => userId === requestedId);

  if (user) {
    return res.status(200).json(user);
  }

  return res.status(404).send();
};

module.exports = putCreate;
