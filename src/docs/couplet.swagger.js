/**
 * @swagger
 * tags:
 *  name: Couplet
 *  description: Couplet API Calls
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    CreateCouplet:
 *      type: object
 *      required:
 *        - poemID
 *        - verse1
 *        - couplet
 *      properties:
 *        poemID:
 *          type: number
 *        verse1:
 *          type: string
 *        verse2:
 *          type: string
 *        start_time:
 *          type: string
 *        end_time:
 *          type: string
 *        couplet:
 *          type: number
 */

/**
 * @swagger
 * /couplet/:
 *  post:
 *    summary: Couplet creation api post call
 *    tags:
 *      - Couplet
 *    requestBody:
 *      content:
 *        application/x-www-form-urlencoded:
 *          schema:
 *            $ref: '#/components/schemas/CreateCouplet'
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/CreateCouplet'
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      201:
 *        description: created
 *      400:
 *        description: bad request
 */

/**
 * @swagger
 * /couplet/{id}:
 *  get:
 *    summary: Couplet creation api post call
 *    tags:
 *      - Couplet
 *    parameters:
 *      - in:  path
 *        name: id
 *        type: string
 *    responses:
 *      200:
 *        description: success
 *      404:
 *        description: poem not found
 */
