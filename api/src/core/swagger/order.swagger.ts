/**
 * @swagger
 * definitions:
 *   Order:
 *     properties:
 *       quantity:
 *         type: number
 *         required: true
 *       date:
 *         type: string
 *         format: date
 *         required: true
 *       schedule:
 *         type: string
 *         require: true
 *       userId:
 *         type: number
 *         require: true
 *       productId:
 *         type: number
 *         require: true
 *       institutionId:
 *         type: number
 *         require: true
 *       ready:
 *         type: boolean
 *         require: true
 *       delivered:
 *         type: boolean
 *         require: true
 */

/**
 * @swagger
 * /order:
 *   get:
 *     tags:
 *       - Order
 *     description: Return all orders
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Return all orders
 *       404:
 *         description: Orders not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /order/date/{date}:
 *   get:
 *     tags:
 *       - Order
 *     description: Return all orders
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: date
 *         description: date of the order
 *         in: path
 *         required: true
 *         type: string
 *         format: date
 *     responses:
 *       200:
 *         description: Return all orders
 *       404:
 *         description: Orders not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /order/date/{date}/userid/{userid}:
 *   get:
 *     tags:
 *       - Order
 *     description: Return all orders
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: date
 *         description: date of the order
 *         in: path
 *         required: true
 *         type: string
 *         format: date
 *       - name: userid
 *         description: userid of the order
 *         in: path
 *         required: true
 *         type: number
 *     responses:
 *       200:
 *         description: Return all orders
 *       404:
 *         description: Orders not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /order/{id}:
 *   get:
 *     tags:
 *       - Order
 *     description: Return a order by id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Id of the order
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Return a order
 *       404:
 *         description: Order not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /order:
 *   post:
 *     tags:
 *       - Order
 *     description: Create a order
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Order
 *         description: Field to create a order
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Order'
 *     responses:
 *       200:
 *         description: Return a text of created order
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /order/{id}:
 *   put:
 *     tags:
 *       - Order
 *     description: Update a order
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Id of the order
 *         in: path
 *         required: true
 *         type: string
 *       - name: Order
 *         description: Field to create a order
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Order'
 *     responses:
 *       200:
 *         description: Return a text of updated order
 *       404:
 *         description: Order type not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /order/{id}:
 *   delete:
 *     tags:
 *       - Order
 *     description: Delete a order
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Id of the order
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Return a text of deleted order
 *       404:
 *         description: Order type not found
 *       500:
 *         description: Internal server error
 */
