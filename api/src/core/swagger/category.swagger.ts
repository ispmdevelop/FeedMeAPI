/**
 * @swagger
 * definitions:
 *   Category:
 *     properties:
 *       name:
 *         type: string
 *         required: true
 */

/**
 * @swagger
 * /category:
 *   get:
 *     tags:
 *       - Category
 *     description: Return all categories
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Return all categories
 *       404:
 *         description: Institutions not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /category/{id}:
 *   get:
 *     tags:
 *       - Category
 *     description: Return a category by id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Id of the category
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Return a category
 *       404:
 *         description: Category not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /category:
 *   post:
 *     tags:
 *       - Category
 *     description: Create a category
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Category
 *         description: Field to create a category
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Category'
 *     responses:
 *       200:
 *         description: Return a text of created category
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /category/{id}:
 *   put:
 *     tags:
 *       - Category
 *     description: Update a category
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Id of the category
 *         in: path
 *         required: true
 *         type: string
 *       - name: Category
 *         description: Field to create a category
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Category'
 *     responses:
 *       200:
 *         description: Return a text of updated category
 *       404:
 *         description: Category type not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /category/{id}:
 *   delete:
 *     tags:
 *       - Category
 *     description: Delete a category
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Id of the category
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Return a text of deleted category
 *       404:
 *         description: Category type not found
 *       500:
 *         description: Internal server error
 */
