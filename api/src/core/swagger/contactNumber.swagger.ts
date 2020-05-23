/**
 * @swagger
 * definitions:
 *   ContactNumber:
 *     properties:
 *       name:
 *         type: string
 *         required: true
 *       number:
 *         type: string
 *         required: true
 *       active:
 *         type: boolean
 *         required: true
 */

/**
 * @swagger
 * /contactNumber:
 *   get:
 *     tags:
 *       - ContactNumber
 *     description: Return all contactNumber
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Return all contactNumber
 *       404:
 *         description: ContactNumbers not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /contactNumber/{id}:
 *   get:
 *     tags:
 *       - ContactNumber
 *     description: Return a contactNumber by id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Id of the contactNumber
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Return a contactNumber
 *       404:
 *         description: ContactNumber not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /contactNumber:
 *   post:
 *     tags:
 *       - ContactNumber
 *     description: Create a contactNumber
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: ContactNumber
 *         description: Field to create a contactNumber
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/ContactNumber'
 *     responses:
 *       200:
 *         description: Return a text of created contactNumber
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /contactNumber/{id}:
 *   put:
 *     tags:
 *       - ContactNumber
 *     description: Update a contactNumber
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Id of the contactNumber
 *         in: path
 *         required: true
 *         type: string
 *       - name: ContactNumber
 *         description: Field to create a contactNumber
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/ContactNumber'
 *     responses:
 *       200:
 *         description: Return a text of updated contactNumber
 *       404:
 *         description: ContactNumber type not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /contactNumber/{id}:
 *   delete:
 *     tags:
 *       - ContactNumber
 *     description: Delete a contactNumber
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Id of the contactNumber
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Return a text of deleted contactNumber
 *       404:
 *         description: ContactNumber type not found
 *       500:
 *         description: Internal server error
 */
