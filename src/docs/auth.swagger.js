/**
 * @swagger
 * tags:
 *  name: Auth
 *  description: Authentication API Calls
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    Register:
 *      type: object
 *      required:
 *        - name
 *        - username
 *        - password
 *        - email
 *      properties:
 *        name:
 *          type: string
 *        username:
 *          type: string
 *        password:
 *          type: string
 *        email:
 *          type: string
 *        bio:
 *          type: string
 *    Login:
 *      type: object
 *      required:
 *        - username
 *        - password
 *      properties:
 *        username:
 *          type: string
 *        password:
 *          type: string
 */

/**
 * @swagger
 * /auth/register:
 *  post:
 *    summary: User registration api post call
 *    tags:
 *      - Auth
 *    requestBody:
 *      content:
 *        application/x-www-form-urlencoded:
 *          schema:
 *            $ref: '#/components/schemas/Register'
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Register'
 *    responses:
 *      201:
 *        description: created
 *      400:
 *        description: bad request
 */
/**
 * @swagger
 * /auth/login:
 *  post:
 *    summary: User login api post call
 *    tags:
 *      - Auth
 *    requestBody:
 *      content:
 *        application/x-www-form-urlencoded:
 *          schema:
 *            $ref: '#/components/schemas/Login'
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Login'
 *    responses:
 *      200:
 *        description: success
 *      400:
 *        description: bad request
 */
