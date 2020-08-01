
const { check } = require('express-validator');

const validation = {
    create: [
        check('fullname').isLength({ min: 6 }),
        check('phone').isLength({ min: 9 }),
        check('birthday').isLength({ min: 3, max: 50 }),

    ]
};

module.exports = validation;