/**
 * @swagger
 * definitions:
 *   Subscription:
 *     properties:
 *       userId:
 *         type: number
 *         required: true
 *       institutionId:
 *         type: number
 *         required: true
 */

/**
 * @swagger
 * /subscription:
 *   get:
 *     tags:
 *       - Subscription
 *     description: Return all subscriptions
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Return all subscriptions
 *       404:
 *         description: Subscriptions not found
 *       500:
 *         description: Internal server error
 */

/**
* @swagger
* /subscription/user/{userid}:
*   get:
*     tags:
*       - Subscription
*     description: Return all subscriptions
*     produces:
*       - application/json
*     parameters:
*       - name: userid
*         description: userid of the subscription
*         in: path
*         required: true
*         type: string
*     responses:
*       200:
*         description: Return all subscriptions
*       404:
*         description: Subscriptions not found
*       500:
*         description: Internal server error
*/

/**
 * @swagger
 * /subscription/{id}:
 *   get:
 *     tags:
 *       - Subscription
 *     description: Return a subscription by id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Id of the subscription
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Return a subscription
 *       404:
 *         description: Subscription not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /subscription:
 *   post:
 *     tags:
 *       - Subscription
 *     description: Create a subscription
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Subscription
 *         description: Field to create a subscription
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Subscription'
 *     responses:
 *       200:
 *         description: Return a text of created subscription
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /subscription/{id}:
 *   delete:
 *     tags:
 *       - Subscription
 *     description: Delete a subscription
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Id of the subscription
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Return a text of deleted subscription
 *       404:
 *         description: Subscription type not found
 *       500:
 *         description: Internal server error
 */