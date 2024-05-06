import { body } from 'express-validator';

export const userRegisterRules = [
    body('username', ['Username is required']).notEmpty(),
    body('email', ['Email is required']).isEmail().normalizeEmail(),
    body('password', ['Password is required']).isLength({ min: 6 }),
];
