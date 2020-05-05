/**
 * @swagger
 * definitions:
 *   User:
 *     properties:
 *       name:
 *         type: string
 *         required: true
 *       email:
 *         type: string
 *         required: true
 *       phone:
 *         type: string
 *         require: true
 */

/**
 * @swagger
 * definitions:
 *   UserPost:
 *     properties:
 *       name:
 *         type: string
 *         required: true
 *       email:
 *         type: string
 *         required: true
 *       phone:
 *         type: string
 *         require: true
 *       password:
 *         type: string
 *         require: true
 */

/**
 * @swagger
 * definitions:
 *   UserLogin:
 *     properties:
 *       email:
 *         type: string
 *         required: true
 *       password:
 *         type: string
 *         require: true
 */

/**
 * @swagger
 * /user:
 *   get:
 *     tags:
 *       - User
 *     description: Return all users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Return all users
 *       404:
 *         description: Users not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /user/{id}:
 *   get:
 *     tags:
 *       - User
 *     description: Return a user by id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Id of the user
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Return a user
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /user/email/{email}:
 *   get:
 *     tags:
 *       - User
 *     description: Return a user by email
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: email
 *         description: email of the user
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Return a user
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /user:
 *   post:
 *     tags:
 *       - User
 *     description: Create a user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: User
 *         description: Field to create a user
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/UserPost'
 *     responses:
 *       200:
 *         description: Return a text of created user
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /user/login:
 *   post:
 *     tags:
 *       - User
 *     description: Login a user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: User
 *         description: Field to create a user
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/UserLogin'
 *     responses:
 *       200:
 *         description: Return a text of created user
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /user/{id}:
 *   put:
 *     tags:
 *       - User
 *     description: Update a user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Id of the user
 *         in: path
 *         required: true
 *         type: string
 *       - name: User
 *         description: Field to create a user
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/User'
 *     responses:
 *       200:
 *         description: Return a text of updated user
 *       404:
 *         description: User type not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     tags:
 *       - User
 *     description: Delete a user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Id of the user
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Return a text of deleted user
 *       404:
 *         description: User type not found
 *       500:
 *         description: Internal server error
 */
