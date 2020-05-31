/**
 * @swagger
 * definitions:
 *   Address:
 *     properties:
 *       alias:
 *         type: string
 *         required: true
 *       street:
 *         type: string
 *         required: true
 *       buildingNumber:
 *         type: string
 *         required: true
 *       reference:
 *         type: string
 *         required: false
 *       lon:
 *         type: number
 *         required: true
 *       lat:
 *         type: number
 *         required: true
 *       userId:
 *         type: number
 *         required: true
 */

/**
 * @swagger
 * /address:
 *   get:
 *     tags:
 *       - Address
 *     description: Return all addresses
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Return all addresses
 *       404:
 *         description: Institutions not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /address/{id}:
 *   get:
 *     tags:
 *       - Address
 *     description: Return a address by id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Id of the address
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Return a address
 *       404:
 *         description: Address not found
 *       500:
 *         description: Internal server error
 */
/**
 * @swagger
 * /address/user/{userid}:
 *   get:
 *     tags:
 *       - Address
 *     description: Return a addresses by userId
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userid
 *         description: Id of the user
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Return a address
 *       404:
 *         description: Address not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /address:
 *   post:
 *     tags:
 *       - Address
 *     description: Create a address
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Address
 *         description: Field to create a address
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Address'
 *     responses:
 *       200:
 *         description: Return a text of created address
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /address/{id}:
 *   put:
 *     tags:
 *       - Address
 *     description: Update a address
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Id of the address
 *         in: path
 *         required: true
 *         type: string
 *       - name: Address
 *         description: Field to create a address
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Address'
 *     responses:
 *       200:
 *         description: Return a text of updated address
 *       404:
 *         description: Address type not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /address/{id}:
 *   delete:
 *     tags:
 *       - Address
 *     description: Delete a address
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Id of the address
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Return a text of deleted address
 *       404:
 *         description: Address type not found
 *       500:
 *         description: Internal server error
 */
