/**
 * @swagger
 * definitions:
 *   CategoryProduct:
 *     properties:
 *       productId:
 *         type: number
 *         required: true
 *       categoryId:
 *         type: number
 *         required: true
 */

/**
 * @swagger
 * /categoryProduct:
 *   get:
 *     tags:
 *       - CategoryProduct
 *     description: Return all categoryProduct
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Return all categoryProduct
 *       404:
 *         description: CategoryProducts not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /categoryProduct/{id}:
 *   get:
 *     tags:
 *       - CategoryProduct
 *     description: Return a categoryProduct by id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Id of the categoryProduct
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Return a categoryProduct
 *       404:
 *         description: CategoryProduct not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /categoryProduct:
 *   post:
 *     tags:
 *       - CategoryProduct
 *     description: Create a categoryProduct
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: CategoryProduct
 *         description: Field to create a categoryProduct
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/CategoryProduct'
 *     responses:
 *       200:
 *         description: Return a text of created categoryProduct
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /categoryProduct/{id}:
 *   put:
 *     tags:
 *       - CategoryProduct
 *     description: Update a categoryProduct
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Id of the categoryProduct
 *         in: path
 *         required: true
 *         type: string
 *       - name: CategoryProduct
 *         description: Field to create a categoryProduct
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/CategoryProduct'
 *     responses:
 *       200:
 *         description: Return a text of updated categoryProduct
 *       404:
 *         description: CategoryProduct type not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /categoryProduct/{id}:
 *   delete:
 *     tags:
 *       - CategoryProduct
 *     description: Delete a categoryProduct
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Id of the categoryProduct
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Return a text of deleted categoryProduct
 *       404:
 *         description: CategoryProduct type not found
 *       500:
 *         description: Internal server error
 */
