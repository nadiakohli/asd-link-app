/**
 * @swagger
 * paths:
 *  /links:
 *   post:
 *     tags:
 *       - Link
 *     name: Link
 *     summary: Create the link
 *     produces:
 *       - application/json
 *     consumes:
  *       - application/json
  *     parameters:
  *       - name: body
  *         in: body
  *         schema:
  *           type: object
  *           properties:
  *             fullLink:
  *               type: string
  *         description: To see how this API works, enter your long link and get a modified short copy with other data
  *         required:
  *           - fullLink
  *     responses:
  *       '201':
  *         description: Link successfully created
  *       '404':
  *         description: 404 Not Found
  *       '500':
  *         description: 500 Internal Server Error
  *  /links/{url}:
  *   get:
  *     tags:
  *       - Link
  *     name: Link
  *     summary: Get the full link from its modified copy
  *     produces:
  *       - application/json
  *     consumes:
  *       - application/json
  *     parameters:
  *       - name: url
  *         in: path
  *         required: true
  *         schema:
  *           type: string
  *           minimum: 1
  *         description: To see how this API works, enter your short link and get the full source link
  *     responses:
  *       '200':
  *         description: Link successfully fetched
  *       '404':
  *         description: 404 Not Found
  *       '500':
  *         description: 500 Internal Server Error
  *  /{url}:
  *   get:
  *     tags:
  *       - Link
  *     name: Link
  *     summary: Get the full link with redirect to this origin
  *     produces:
  *       - application/json
  *     consumes:
  *       - application/json
  *     parameters:
  *       - name: url
  *         in: path
  *         required: true
  *         schema:
  *           type: string
  *           minimum: 1
  *         description: To see how this API works, enter your short link and get the full source link
  *     responses:
  *       '200':
  *         description: Link successfully fetched
  *       '404':
  *         description: 404 Not Found
  *       '500':
  *         description: 500 Internal Server Error
*/
