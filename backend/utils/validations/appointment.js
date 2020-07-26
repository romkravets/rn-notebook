const { check } = require('express-validator');

const validation = {
    create: [
        check('price').isInt({ min: 0, max: 200000 }),
        check('service').isLength({ min: 3, max: 50 }),
        check('description').isLength({ min: 3, max: 50 }),
        check('date').isLength({ min: 3, max: 50 }),
        check('time').isLength({ min: 3, max: 50 }),
        check('client').isLength({ min: 3, max: 50 })
    ],
    update: [
        check('price').isInt({ min: 0, max: 200000 }),
        check('service').isLength({ min: 3, max: 50 }),
        check('description').isLength({ min: 3, max: 50 }),
        check('date').isLength({ min: 3, max: 50 }),
        check('time').isLength({ min: 3, max: 50 }),
    ]
};

module.exports = validation;