/**
 * @swagger
 * definitions:
 *   Product:
 *     properties:
 *       name:
 *         type: string
 *         required: true
 *       price:
 *         type: number
 *         required: true
 *       active:
 *         type: boolean
 *         require: true
 *       description:
 *         type: string
 *         require: true
 */

/**
 * @swagger
 * /product:
 *   get:
 *     tags:
 *       - Product
 *     description: Return all products
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Return all products
 *       404:
 *         description: Products not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /product/{id}:
 *   get:
 *     tags:
 *       - Product
 *     description: Return a product by id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Id of the product
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Return a product
 *       404:
 *         description: Product not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /product:
 *   post:
 *     tags:
 *       - Product
 *     description: Create a product
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: formData
 *         name: name
 *         type: string
 *         required: true
 *       - in: formData
 *         name: price
 *         type: number
 *         required: true
 *       - in: formData
 *         name: active
 *         type: boolean
 *         required: true
 *       - in: formData
 *         name: description
 *         type: string
 *         required: true
 *       - in: formData
 *         name: image
 *         type: file
 *         required: true
 *     responses:
 *       200:
 *         description: Return a text of created product
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /product/{id}:
 *   put:
 *     tags:
 *       - Product
 *     description: Update a product
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Id of the product
 *         in: path
 *         required: true
 *         type: string
 *       - in: formData
 *         name: name
 *         type: string
 *         required: true
 *       - in: formData
 *         name: price
 *         type: number
 *         required: true
 *       - in: formData
 *         name: active
 *         type: boolean
 *         required: true
 *       - in: formData
 *         name: description
 *         type: string
 *         required: true
 *       - in: formData
 *         name: image
 *         type: file
 *         required: true
 *     responses:
 *       200:
 *         description: Return a text of updated product
 *       404:
 *         description: Product type not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /product/{id}:
 *   delete:
 *     tags:
 *       - Product
 *     description: Delete a product
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Id of the product
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Return a text of deleted product
 *       404:
 *         description: Product type not found
 *       500:
 *         description: Internal server error
 */