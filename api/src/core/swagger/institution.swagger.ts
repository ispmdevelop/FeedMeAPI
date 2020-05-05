/**
 * @swagger
 * definitions:
 *   Institution:
 *     properties:
 *       name:
 *         type: string
 *         required: true
 *       address:
 *         type: string
 *         required: true
 *       password:
 *         type: string
 *         require: true
 *       schedule:
 *         type: array
 *         require: true
 *         items:
 *           type: string
 */

/**
 * @swagger
 * /institution:
 *   get:
 *     tags:
 *       - Institution
 *     description: Return all institutions
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Return all institutions
 *       404:
 *         description: Institutions not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /institution/{id}:
 *   get:
 *     tags:
 *       - Institution
 *     description: Return a institution by id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Id of the institution
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Return a institution
 *       404:
 *         description: Institution not found
 *       500:
 *         description: Internal server error
 */

/**
* @swagger
* /institution/password/{password}:
*   get:
*     tags:
*       - Institution
*     description: Return a institution by password
*     produces:
*       - application/json
*     parameters:
*       - name: password
*         description: password of the institution
*         in: path
*         required: true
*         type: string
*     responses:
*       200:
*         description: Return a institution
*       404:
*         description: Institution not found
*       500:
*         description: Internal server error
*/


/**
 * @swagger
 * /institution:
 *   post:
 *     tags:
 *       - Institution
 *     description: Create a institution
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Institution
 *         description: Field to create a institution
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Institution'
 *     responses:
 *       200:
 *         description: Return a text of created institution
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /institution/{id}:
 *   put:
 *     tags:
 *       - Institution
 *     description: Update a institution
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Id of the institution
 *         in: path
 *         required: true
 *         type: string
 *       - name: Institution
 *         description: Field to create a institution
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Institution'
 *     responses:
 *       200:
 *         description: Return a text of updated institution
 *       404:
 *         description: Institution type not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /institution/{id}:
 *   delete:
 *     tags:
 *       - Institution
 *     description: Delete a institution
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Id of the institution
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Return a text of deleted institution
 *       404:
 *         description: Institution type not found
 *       500:
 *         description: Internal server error
 */