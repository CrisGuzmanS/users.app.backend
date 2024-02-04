import express from 'express';
import { indexUserController } from './Users/Controllers/indexUserController.js';
import { createUserController } from './Users/Controllers/createUserController.js';
import { loginController } from './Auth/Controllers/loginController.js';

const router = express.Router()

router.post('/api/v1/login', loginController);
router.get('/api/v1/usuarios', indexUserController);
router.post('/api/v1/usuarios', createUserController);

export { router };