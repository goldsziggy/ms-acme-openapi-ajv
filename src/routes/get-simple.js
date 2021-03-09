/**
 * @openapi
 *  /v1/acme:
 *    get:
 *      description: a simple get route that returns the `foo` query param
 *      parameters:
 *        - in: query
 *          name: foo
 *          schema:
 *            type: string
 *            minimum: 3
 *      responses:
 *        200:
 *          description: a object witth the echoed query param.
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  foo:
 *                    type: string
 *                    minimum: 3
 */
const getSimple = (req, res) => {
  const { foo } = req.query;

  return res.status(200).json({ foo });
};

module.exports = getSimple;
