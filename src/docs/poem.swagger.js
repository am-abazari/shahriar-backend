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
 *    summary: Poem creation api post call
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
 */
