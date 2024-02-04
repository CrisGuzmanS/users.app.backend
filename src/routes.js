import express from 'express';
import { indexUserController } from './Users/Controllers/indexUserController.js';
import { createUserController } from './Users/Controllers/createUserController.js';

const router = express.Router()

router.get('/api/v1/usuarios', indexUserController);
router.post('/api/v1/usuarios', createUserController);

export { router };