/**
 * @swagger
 * tags:
 *  name: Poem
 *  description: Poem API Calls
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    CreatePoem:
 *      type: object
 *      required:
 *        - name
 *      properties:
 *        name:
 *          type: string
 *        description:
 *          type: string
 *        poet:
 *          type: string
 *        voice:
 *          type: string
 */

/**
 * @swagger
 * /poem/:
 *  post:
 *    summary: Poem creation
 *    tags:
 *      - Poem
 *    requestBody:
 *      content:
 *        application/x-www-form-urlencoded:
 *          schema:
 *            $ref: '#/components/schemas/CreatePoem'
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/CreatePoem'
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      201:
 *        description: created
 *      400:
 *        description: bad request
 *      409:
 *        description: conflict for couplet number
 */

/**
 * @swagger
 * /poem/{id}:
 *  get:
 *    summary: Get poem with given id
 *    tags:
 *      - Poem
 *    parameters:
 *      - in:  path
 *        name: id
 *    responses:
 *      200:
 *        description: success
 *      404:
 *        description: poem not found
 */
/**
 * @swagger
 * /poem/:
 *  get:
 *    summary: Get all poems
 *    tags:
 *      - Poem
 *    responses:
 *      200:
 *        description: success
 *      404:
 *        description: poem not found
 */
